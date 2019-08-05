import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class bodyComponent {

  mostrar: true;
  
  frase: any = {
    message: 'ahi va la hostia',
    author: 'Madhur'
  };

  personajes: string[] = ['Farfar', 'Rumanito', 'Rumba']

}