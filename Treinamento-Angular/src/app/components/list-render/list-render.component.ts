import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals: Animal[] = [
    {
      name: "Pipoca",
      type: "Dog",
      age: 12
    },
    {
      name: "Tom",
      type: "Cat",
      age: 78
    },
    {
      name: "Jerry",
      type: "Mouse",
      age: 70
    },
    {
      name: "Chico",
      type: "Prikito",
      age: 4
    }
  ]

  animalDetails = ''

  showAge(animal: Animal): void{
    this.animalDetails = `O animal de estimação ${animal.name} tem ${animal.age} anos!`
  }
}
