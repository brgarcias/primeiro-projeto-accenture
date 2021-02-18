import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio.diretivas.constants';

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


  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  PREFIXO_IMAGEM = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

}
