import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Seja bem-vindo!";
  initialValue2 = 10;

  constructor() { }


  eventoRecebido($event: any) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }

  eventoMenos($event: any) {
    this.initialValue2--;
    console.log('decrementado pelo pai: ', this.initialValue2);
  }

  eventoMais($event: any) {
    this.initialValue2++;
    console.log('incrementado pelo pai: ', this.initialValue2);
  }
}
