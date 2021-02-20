import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logged(email: string, password: string) {

    if (email === 'bruno-151299@hotmail.com' && password === '123456') {
      return of({
        user: {
          name: 'Bruno',
          lasName: 'Garcia',
          email: 'bruno-151299@hotmail.com',
        },
        token: 'aFGFS1342awGREGbdeGRE124JUYKwfwb'
      }).pipe(
        delay(2000)
      )
    }

    return timer(500).pipe(mergeMap(() => throwError('Usuário ou senha incorretos..')))
  }

}
