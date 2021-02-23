import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      bank: ['', Validators.required],
    })
  }

  validadeAllForms() {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      control?.markAsTouched();
    })
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validadeAllForms();
      return;
    }
    this.saveContact();
  }

  showError(controlName: string) {
    if (!this.contatoForm.get(controlName)) {
      return false
    }
    return this.contatoForm.get(controlName)?.invalid && this.contatoForm.get(controlName)?.touched
  }

  saveContact() {
    this.contatoService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessSaveContact(),
        error => this.onErrorSaveContact()
      )
  }

  onSuccessSaveContact() {
    this.router.navigate(['contato']);
    this.toastr.success('Contato criado com sucesso.', 'Sucesso!');
  }

  onErrorSaveContact() {
    this.toastr.error('Alguma coisa deu errado.', 'Erro!');
  }
}
