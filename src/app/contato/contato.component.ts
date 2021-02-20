import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from './contato.interfaces';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contatos!: Contatos[];
  page = 1;

  isLoading!: boolean;
  isError!: boolean;

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.loadingContatos();
  }

  loadingContatos() {
    this.isLoading = true;
    this.isError = false;
    this.contatoService.getContatos(this.page)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Contatos[]) {
    this.isError = false;
    this.contatos = response;
  }

  onError(error: any) {
    this.isError = true;
  }

  previousPage() {
    this.page--;
    this.loadingContatos();
  }

  nextPage() {
    this.page++;
    this.loadingContatos();
  }
}
