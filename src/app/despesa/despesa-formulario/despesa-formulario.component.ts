import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Despesa } from 'src/app/compartilhado/model/despesa';
import { DespesaEditar } from 'src/app/compartilhado/model/despesa-editar';
import { DespesaSalvar } from 'src/app/compartilhado/model/despesa-salvar';
import { DespesaService } from 'src/app/compartilhado/service/despesa.service';

@Component({
  selector: 'app-despesa-formulario',
  templateUrl: './despesa-formulario.component.html',
  styleUrls: ['./despesa-formulario.component.scss'],
})
export class DespesaFormularioComponent implements OnInit {
  titulo!: string;
  btnSalvar!: string;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DespesaService,
    public dialogRef: MatDialogRef<DespesaFormularioComponent>,
    readonly snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { acao: string; id: number }
  ) {}

  ngOnInit(): void {
    this.criarFormulario();

    if (this.data.acao == 'criar') {
      this.titulo = 'Adicionar Despesa';
      this.btnSalvar = 'Salvar';
    } else if (this.data.acao == 'editar') {
      this.titulo = 'Editar Despesa';
      this.btnSalvar = 'Atualizar';
      this.carregar(this.data.id);
    }
  }

  carregar(idCartao: number) {
    this.service.buscarPorId(idCartao).subscribe((retorno: Despesa) => {
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
      const data = this.formulario.value as DespesaSalvar;

      this.service.salvar(data).subscribe((result: Despesa) => {
        this.dialogRef.close(true);
        this.snackBar.open('Salvou com sucesso!');
      });
    }
  }

  atualizar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as DespesaEditar;

      this.service.editar(this.data.id, data).subscribe(() => {
        this.dialogRef.close(true);
        this.snackBar.open('Atualizou com sucesso!');
      });
    }
  }
}
