import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import Moment from 'App/Models/Moment'

export default class CommentsController {

    public async store({request, response, params}: HttpContextContract){

        const body = request.body()
        const momentId = params.momentId

        await Moment.findOrFail(momentId)

        body.momentId = momentId

        const comment = await Comment.create(body)

        response.status(201)

        return{
            msg: "Comentario adicionado com sucesso",
            data: comment,
        }

    }

    public async index(){
        const comments = await Comment.all()
        
        return {
            data: comments
        }
    }

    public async show({params}: HttpContextContract){

        const comment = await Comment.findOrFail(params.id)

        return {
            data: comment
        }
    }

    public async destroy({params}: HttpContextContract){
        const comment = await Comment.findOrFail(params.id)

        await comment.delete()

        return{
            msg: "mensagem excluida com sucesso",
            data: comment
        }
    }

    public async update({request, params}: HttpContextContract){

        const body = request.body()

        const comment = await Comment.findOrFail(params.id)

        comment.username = body.username
        comment.text = body.text

        await comment.save()

        return{
            msg: "Comentario auterado com sucesso",
            data: comment
        }
    }

}
