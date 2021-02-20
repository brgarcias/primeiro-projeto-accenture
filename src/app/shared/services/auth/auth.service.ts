import { Injectable } from '@angular/core';

import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user!: Usuario;
  token!: string;

  constructor() { }


  setUser(user: Usuario) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.user) {
      return this.user;
    }
    const userLocale = localStorage.getItem('user');
    if (userLocale) {
      this.user = JSON.parse(userLocale);
      return this.user;
    }
    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    const tokenLocale = localStorage.getItem('token');
    if (tokenLocale) {
      this.token = tokenLocale;
      return this.token;
    }
    return null;
  }

  isLogged() {
    return this.getUser() && this.getToken ? true : false;
  }
}

