import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Despesa } from '../compartilhado/model/despesa';
import { DespesaService } from '../compartilhado/service/despesa.service';
import { DespesaFormularioComponent } from './despesa-formulario/despesa-formulario.component';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss'],
})
export class DespesaComponent {
  despesas: Despesa[] = [];
  colunasVisiveis: string[] = ['id', 'nome', 'acao'];

  constructor(
    private despesaService: DespesaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.despesaService.listarTodos().subscribe((result: Despesa[]) => {
      this.despesas = result ? result : [];
    });
  }

  deletar(id: number): void {
    this.despesaService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }

  abrirDialogAdicionar() {
    const dialogRef = this.dialog.open(DespesaFormularioComponent, {
      data: { acao: 'criar' },
    });

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }

  abrirDialogEditar(id: number): void {
    const dialogRef = this.dialog.open(DespesaFormularioComponent, {
      data: { acao: 'editar', id },
    });

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
