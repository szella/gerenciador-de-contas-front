import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Despesa } from '../compartilhado/model/despesa';
import { DespesaService } from '../compartilhado/service/despesa.service';
import { DespesaAdicionarComponent } from '../dialog/despesa-adicionar/despesa-adicionar.component';

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
    const dialogRef = this.dialog.open(DespesaAdicionarComponent);

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
