import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    private cartaoService: CartaoService,
    public dialogRef: MatDialogRef<CartaoAdicionarComponent>
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

      this.cartaoService.salvar(data).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
