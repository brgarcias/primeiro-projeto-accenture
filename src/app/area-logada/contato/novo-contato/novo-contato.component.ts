import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contato.interfaces';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm!: FormGroup;
  isLoading!: boolean;
  isError!: boolean;
  idContato!: any;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.idContato = this.route.snapshot.paramMap.get('id');

    if (this.isEditing()) {
      this.loadingContacts();
    }
  }

  initializeForm() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
  }

  loadingContacts() {
    this.isLoading = true;
    this.isError = false;

    this.idContato = this.route.snapshot.paramMap.get('id');
    this.contatoService.getContato(String(this.idContato))
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccessGetContact(response),
        error => this.onErrorGetContact(error)
      )
  }

  onSuccessGetContact(response: Contatos) {
    this.isError = false;
    this.contatoForm.patchValue(response)
  }

  onErrorGetContact(error: any) {
    this.isError = true;
  }

  validadeAllForms(form: FormGroup) {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      if (control instanceof FormControl) {
        control?.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validadeAllForms(form)
      }
    })
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validadeAllForms(this.contatoForm);
      return;
    }
    if (this.isEditing()) {
      this.updateContact();
      return;
    }

    this.createContact();
  }

  isEditing = () => Boolean(this.idContato)

  showError(controlName: string) {
    if (!this.contatoForm.get(controlName)) {
      return false
    }
    return this.contatoForm.get(controlName)?.invalid && this.contatoForm.get(controlName)?.touched
  }

  createContact() {
    this.contatoService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCreateContact(),
        error => this.onErrorCreateContact()
      )
  }

  onSuccessCreateContact() {
    this.router.navigate(['contato']);
    this.toastr.success('Contato criado com sucesso.', 'Sucesso!');
  }

  onErrorCreateContact() {
    this.toastr.error('Alguma coisa deu errado ao criar o contato.', 'Erro!');
  }

  updateContact() {
    this.contatoService.updateContato(this.idContato, this.contatoForm.value)
      .subscribe(
        response => this.onSuccessUpdateContact(),
        error => this.onErrorUpdateContact()
      )
  }

  onSuccessUpdateContact() {
    this.router.navigate(['contato']);
    this.toastr.success('Contato alterado com sucesso.', 'Sucesso!');
  }

  onErrorUpdateContact() {
    this.toastr.error('Alguma coisa deu errado ao alterar o contato.', 'Erro!');
  }
}
