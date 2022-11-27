import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/compartilhado/model/cartao';
import { CompraCartaoSalvar } from 'src/app/compartilhado/model/compra-cartao-salvar';
import { CartaoService } from 'src/app/compartilhado/service/cartao.service';
import { CompraCartaoService } from 'src/app/compartilhado/service/compra-cartao.service';

@Component({
  selector: 'app-compra-cartao-adicionar',
  templateUrl: './compra-cartao-adicionar.component.html',
  styleUrls: ['./compra-cartao-adicionar.component.scss'],
})
export class CompraCartaoAdicionarComponent {
  formulario!: FormGroup;

  cartoes: Cartao[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private compraCartaoService: CompraCartaoService,
    private cartaoService: CartaoService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarCartoes();
  }

  buscarCartoes(): void {
    this.cartaoService.listarTodos().subscribe((result: Cartao[]) => {
      this.cartoes = result ? result : [];
    });
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      mes: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
      ano: [0, [Validators.required]],
      idCartao: ['', [Validators.required]],
      parcelas: [0, [Validators.required, Validators.min(1)]],
    });
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as CompraCartaoSalvar;

      this.compraCartaoService.salvar(data).subscribe((result: Cartao) => {
        this.router.navigateByUrl('/compras-cartao');
      });
    }
  }
}
