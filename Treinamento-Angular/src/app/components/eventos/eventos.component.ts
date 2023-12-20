import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  show: boolean = false

  showMassage(): void{
    this.show = !this.show; // toggle
  }

}
