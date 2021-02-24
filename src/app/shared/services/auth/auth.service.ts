import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user!: Usuario;
  token!: string;

  constructor(
    private router: Router
  ) { }


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
    return this.token;
  }

  isLogged() {
    return this.getUser() && this.getToken ? true : false;
  }

  logout() {
    const y: string = null as any;
    const x: Usuario = null as any;
    this.user = x;
    this.token = y;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

