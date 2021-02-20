import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
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
  }

  showError(controlName: string, form: NgForm) {
    if (!form.controls[controlName]) {
      return false
    }
    return form.controls[controlName]?.invalid && form.controls[controlName].touched
  }
}
