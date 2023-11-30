import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cartao } from 'src/app/compartilhado/model/cartao';
import { CartaoEditar } from 'src/app/compartilhado/model/cartao-editar';
import { CartaoSalvar } from 'src/app/compartilhado/model/cartao-salvar';
import { CartaoService } from 'src/app/compartilhado/service/cartao.service';

@Component({
  selector: 'app-cartao-formulario',
  templateUrl: './cartao-formulario.component.html',
  styleUrls: ['./cartao-formulario.component.scss'],
})
export class CartaoFormularioComponent implements OnInit {
  titulo!: string;
  btnSalvar!: string;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CartaoService,
    public dialogRef: MatDialogRef<CartaoFormularioComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { acao: string; id: number }
  ) {}

  ngOnInit(): void {
    this.criarFormulario();

    if (this.data.acao == 'criar') {
      this.titulo = 'Adicionar Cartão';
      this.btnSalvar = 'Salvar';
    } else if (this.data.acao == 'editar') {
      this.titulo = 'Editar Cartão';
      this.btnSalvar = 'Atualizar';
      this.carregar(this.data.id);
    }
  }

  carregar(idCartao: number) {
    this.service.buscarPorId(idCartao).subscribe((retorno: Cartao) => {
      this.formulario.get('nome')?.setValue(retorno.nome);
    });
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  salvarAtualizar(): void {
    if (this.data.acao == 'criar') {
      this.salvar();
    } else if (this.data.acao == 'editar') {
      this.atualizar();
    }
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as CartaoSalvar;

      this.service.salvar(data).subscribe(() => {
        this.dialogRef.close(true);
        this.snackBar.open('Salvou com sucesso!');
      });
    }
  }

  atualizar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as CartaoEditar;

      this.service.editar(this.data.id, data).subscribe(() => {
        this.dialogRef.close(true);
        this.snackBar.open('Atualizou com sucesso!');
      });
    }
  }
}
