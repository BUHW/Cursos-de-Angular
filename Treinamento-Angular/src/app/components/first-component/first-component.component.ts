import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  name = "victor";
  age = 50;

  hobbie = ["correr", "pular", "Dançar"];

  car = {
    name: "polo",
    ano: 2019,
  }

}
