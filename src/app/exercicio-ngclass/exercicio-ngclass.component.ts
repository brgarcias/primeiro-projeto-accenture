import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss'],
  // Padrão
  // encapsulation: ViewEncapsulation.Emulated,
  
  // Sem encapsulamento
  // encapsulation: ViewEncapsulation.None,
  
  // 
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ExercicioNgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deveSerVerde = true;

  mudarCor() {
    this.deveSerVerde = !this.deveSerVerde;
  }

}
