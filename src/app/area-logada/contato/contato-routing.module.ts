import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatoComponent } from './listar-contatos/contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';

const routes: Routes = [{
  path: '',
  component: ContatoComponent,
}, {
  path: 'novo',
  component: NovoContatoComponent,
}, {
  path: ':id',
  component: DetalhesContatoComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
