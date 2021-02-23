import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Contatos } from './contato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  API_URL = environment.API_URL;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '.... TOKEN DE AUTENTICAÇÃO ....'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getContatos(page: number) {
    // const error = throwError(new Error('Erro genérico.'))
    const api = this.http.get<Contatos[]>(`${this.API_URL}/contatos`, {
      params: {
        _page: String(page)
      }
    });
    return timer(500)
      .pipe(
        mergeMap(() => api)
      )

  }

  getContato(id: string) {
    // const error = throwError(new Error('Erro genérico.'))
    const api = this.http.get<Contatos>(`${this.API_URL}/contatos/${id}`, this.httpOptions);
    return timer(500)
      .pipe(
        mergeMap(() => api)
      )
  }

  createContato(contato: Contatos) {
    return this.http.post<Contatos[]>(`${this.API_URL}/contatos`, contato, this.httpOptions);
  }

  updateContato(id: string, contato: Contatos) {
    return this.http.put<Contatos>(`${this.API_URL}/contatos/` + id, contato, this.httpOptions);
  }

  deleteContato(id: string) {
    return this.http.delete<Contatos[]>(`${this.API_URL}/contatos/${id}`, this.httpOptions);
  }
}
