import { Component } from '@angular/core';

import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals: Animal[] = []

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O animal de estimação ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
   this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
