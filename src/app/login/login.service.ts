import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logged(email: string, password: string): Observable<LoginResponse> {

    if (email === 'bruno-151299@hotmail.com' && password === '123456') {
      return of({
        user: {
          name: 'Bruno',
          lastName: 'Garcia',
          email: 'bruno-151299@hotmail.com',
        },
        token: 'aFGFS1342awGREGbdeGRE124JUYKwfwb'
      }).pipe(
        delay(2000),
        tap(response => {
          this.authService.setUser(response.user);
          this.authService.setToken(response.token);
        })
      )
    }

    return timer(500).pipe(mergeMap(() => throwError('Usuário ou senha incorretos..')))
  }

}
