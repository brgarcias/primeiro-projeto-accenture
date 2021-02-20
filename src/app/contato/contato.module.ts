import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';


@NgModule({
  declarations: [
    ContatoComponent,
    DetalhesContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
