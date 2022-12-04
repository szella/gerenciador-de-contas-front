import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Despesa } from 'src/app/compartilhado/model/despesa';
import { DespesaSalvar } from 'src/app/compartilhado/model/despesa-salvar';
import { DespesaService } from 'src/app/compartilhado/service/despesa.service';

@Component({
  selector: 'app-despesa-adicionar',
  templateUrl: './despesa-adicionar.component.html',
  styleUrls: ['./despesa-adicionar.component.scss'],
})
export class DespesaAdicionarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private despesaService: DespesaService,
    public dialogRef: MatDialogRef<DespesaAdicionarComponent>,
    readonly snackBar: MatSnackBar
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
      const data = this.formulario.value as DespesaSalvar;

      this.despesaService.salvar(data).subscribe((result: Despesa) => {
        this.dialogRef.close(true);
        this.snackBar.open('Salvou com sucesso!');
      });
    }
  }
}
