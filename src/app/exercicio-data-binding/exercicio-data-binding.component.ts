import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() initialValue2 = 2;
  @Output() clicado = new EventEmitter
  @Output() clicadoMenos = new EventEmitter
  @Output() clicadoMais = new EventEmitter

  initialValue = "Valor Inicial";
  imageURL = 'https://super.abril.com.br/wp-content/uploads/2019/04/si_cachorroinstagram_home.png';

  valorDoInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event:any) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event:any) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguem passou o mouse!');
  }

  onClickButtonEmissor($event:any) {
    console.log('Devo emitir informações para o component pai!');
    this.clicado.emit($event);
  }

  onClickMenos($event:any) {
    console.log('decrementado pelo filho!')
    this.clicadoMenos.emit($event);
  }

  onClickMais($event:any) {
    console.log('incrementado pelo filho!')
    this.clicadoMais.emit($event);
  }

}
