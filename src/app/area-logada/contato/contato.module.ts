import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatoRoutingModule } from './contato-routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatoComponent } from './listar-contatos/contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';

@NgModule({
  declarations: [
    ContatoComponent,
    DetalhesContatoComponent,
    NovoContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatoModule { }
