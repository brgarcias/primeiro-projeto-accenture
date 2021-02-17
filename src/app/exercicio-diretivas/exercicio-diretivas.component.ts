import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir = true;

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: any, numero2: any) {
    return numero1 + numero2;
  }

  listaFrutas = [
    'Maçã',
    'Uva',
    'Melancia',
    'Laranja'
  ];

  carrosLista = [{
    placa: 'FVS-6346',
    cor: 'Preto'
  }, {
    placa: 'DBC-4201',
    cor: 'Branco'
  }, {
    placa: 'CFA-1025',
    cor: 'Azul'
  }, {
    placa: 'DPA-9030',
    cor: 'Vermelgp'
  }];
}
