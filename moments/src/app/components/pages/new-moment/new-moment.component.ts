import { Component } from '@angular/core';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText = 'Compartilhar!'

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router
    ){}

   async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append("image", moment.image)
    }

    // to do

    //enviar formulario
    await this.momentService.createMoment(formData).subscribe();

    // exibir mensagem
    this.messagesService.add("Momento adicionado com sucesso!");

    // redirect
    this.router.navigate(['/']);
  }
}
