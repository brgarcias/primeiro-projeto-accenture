import { HttpClient } from '@angular/common/http';
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
    return timer(1500)
      .pipe(
        mergeMap(() => api)
      )
    
  }


  
}
