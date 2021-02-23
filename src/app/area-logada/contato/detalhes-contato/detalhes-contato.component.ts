import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contato.interfaces';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato!: Contatos;

  isLoading!: boolean;
  isError!: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadingContacts();
  }
  
  loadingContacts() {
    this.isLoading = true;
    this.isError = false;
    
    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatoService.getContato(String(idContato))
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Contatos) {
    this.isError = false;
    this.contato = response;
  }

  onError(error: any) {
    this.isError = true;
  }

  back() {
    this.router.navigate([`contato`]);
  }

}
