import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes(page: number) {
    // const error = throwError(new Error('Erro genérico.'))
    const api = this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      params: {
        _page: String(page)
      }
    });
    return timer(500)
      .pipe(
        mergeMap(() => api)
      )
    
  }
}
