import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = 'Victor ta la';

  userData = {
    email: 'teste@email.com',
    role: 'Admin'
  }

  title = 'Treinamento-Angular';
}
