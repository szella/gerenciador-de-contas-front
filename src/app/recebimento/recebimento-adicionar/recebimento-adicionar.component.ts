import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/compartilhado/model/cartao';
import { RecebimentoSalvar } from 'src/app/compartilhado/model/recebimento-salvar';
import { RecebimentoService } from 'src/app/compartilhado/service/recebimento.service';

@Component({
  selector: 'app-recebimento-adicionar',
  templateUrl: './recebimento-adicionar.component.html',
  styleUrls: ['./recebimento-adicionar.component.scss'],
})
export class RecebimentoAdicionarComponent {
  formulario!: FormGroup;

  cartoes: Cartao[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recebimentoService: RecebimentoService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      mes: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
      ano: [0, [Validators.required]], 
      periodo: [0, [Validators.required, Validators.min(1)]],
    });
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as RecebimentoSalvar;

      this.recebimentoService.salvar(data).subscribe((result: Cartao) => {
        this.router.navigateByUrl('/recebimentos');
      });
    }
  }
}
