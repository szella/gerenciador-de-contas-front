import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaFixa } from '../compartilhado/model/despesa-fixa';
import { DespesaFixaService } from '../compartilhado/service/despesa-fixa.service';
import { DespesaFixaAdicionarComponent } from '../dialog/despesa-fixa-adicionar/despesa-fixa-adicionar.component';

@Component({
  selector: 'app-despesa-fixa',
  templateUrl: './despesa-fixa.component.html',
  styleUrls: ['./despesa-fixa.component.scss'],
})
export class DespesaFixaComponent {
  despesasFixa: DespesaFixa[] = [];
  colunasVisiveis: string[] = [
    'id',
    'despesa',
    'valor',
    'mes',
    'ano',
    'dataCadastro',
    'acao',
  ];

  constructor(
    private despesaFixaService: DespesaFixaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.despesaFixaService.listarTodos().subscribe((result: DespesaFixa[]) => {
      this.despesasFixa = result ? result : [];
    });
  }

  deletar(id: number): void {
    this.despesaFixaService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }

  abrirDialogAdicionar() {
    const dialogRef = this.dialog.open(DespesaFixaAdicionarComponent);

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
