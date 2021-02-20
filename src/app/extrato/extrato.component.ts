import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes!: Transacao[];

  isLoading!: boolean;
  isError!: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit() {
    this.loadingExtrato();
  }

  loadingExtrato() {
    this.isLoading = true;
    this.isError = false;
    this.extratoService.getTransacoes()
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Transacao[]) {
    this.isError = false;
    this.transacoes = response;
  }

  onError(error: any) {
    this.isError = true;
  }

}
