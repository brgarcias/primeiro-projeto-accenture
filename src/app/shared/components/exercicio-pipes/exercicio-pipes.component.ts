import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [
    DecimalPipe,
  ],
})
export class ExercicioPipesComponent implements OnInit {

  constructor(
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
  }

  filme = {
    titulo: "Star Wars - The Last Hope",
    estrelas: 4.456456456,
    precoAluguel: 15.45,
    dataLancamento: new Date(2014, 7, 30)
  }

  compras = [{
    produto: 'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 2,
    peso: 29.33333,
    data: new Date(2020, 1, 10, 19, 30),
  }];


  getPesoFormatado(peso: number) {
    if(peso > 0) {
    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg'
  }
    return 'sem peso'
  }
}
