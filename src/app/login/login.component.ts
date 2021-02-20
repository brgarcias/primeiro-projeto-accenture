import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  email!: string;
  password!: string;

  isLoading!: boolean;
  isError!: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isError = false;
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }
      this.passwordInput.nativeElement.focus();
      return;
    }

    this.login();
  }

  login() {
    this.isLoading = true;
    this.isError = false;
    this.loginService.logged(this.email, this.password)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      )
  }

  onSuccessLogin(response: any) {
    this.isError = false;
    this.router.navigate(['home']);
    // this.transacoes = response;
  }

  onErrorLogin(error: any) {
    this.isError = true;
  }

  showError(controlName: string, form: NgForm) {
    if (!form.controls[controlName]) {
      return false
    }
    return form.controls[controlName]?.invalid && form.controls[controlName].touched
  }
}
