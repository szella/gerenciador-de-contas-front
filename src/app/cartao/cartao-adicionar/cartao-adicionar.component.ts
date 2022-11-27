import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/compartilhado/model/cartao';
import { CartaoSalvar } from 'src/app/compartilhado/model/cartao-salvar';
import { CartaoService } from 'src/app/compartilhado/service/cartao.service';

@Component({
  selector: 'app-cartao-adicionar',
  templateUrl: './cartao-adicionar.component.html',
  styleUrls: ['./cartao-adicionar.component.scss'],
})
export class CartaoAdicionarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartaoService: CartaoService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as CartaoSalvar;

      this.cartaoService.salvar(data).subscribe((result: Cartao) => {
        this.router.navigateByUrl('/cartoes');
      });
    }
  }
}
