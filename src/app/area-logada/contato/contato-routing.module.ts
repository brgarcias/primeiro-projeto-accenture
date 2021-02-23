import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatoComponent } from './listar-contatos/contato.component';

const routes: Routes = [{
  path: '',
  component: ContatoComponent,
}, {
  path: ':id',
  component: DetalhesContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
