import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Despesa } from 'src/app/compartilhado/model/despesa';
import { DespesaFixa } from 'src/app/compartilhado/model/despesa-fixa';
import { DespesaFixaSalvar } from 'src/app/compartilhado/model/despesa-fixa-salvar';
import { DespesaFixaService } from 'src/app/compartilhado/service/despesa-fixa.service';
import { DespesaService } from 'src/app/compartilhado/service/despesa.service';

@Component({
  selector: 'app-despesa-fixa-adicionar',
  templateUrl: './despesa-fixa-adicionar.component.html',
  styleUrls: ['./despesa-fixa-adicionar.component.scss'],
})
export class DespesaFixaAdicionarComponent {
  formulario!: FormGroup;

  despesas: Despesa[] = [];

  constructor(
    private fb: FormBuilder,
    private despesaFixaService: DespesaFixaService,
    private despesaService: DespesaService,
    public dialogRef: MatDialogRef<DespesaFixaAdicionarComponent>
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarDespesas();
  }

  buscarDespesas(): void {
    this.despesaService.listarTodos().subscribe((result: Despesa[]) => {
      this.despesas = result ? result : [];
    });
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      valor: ['', [Validators.required]],
      mes: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
      ano: [0, [Validators.required]],
      idDespesa: ['', [Validators.required]],
      periodo: [0, [Validators.required, Validators.min(1)]],
    });
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as DespesaFixaSalvar;

      this.despesaFixaService.salvar(data).subscribe((result: DespesaFixa) => {
        this.dialogRef.close(true);
      });
    }
  }
}
