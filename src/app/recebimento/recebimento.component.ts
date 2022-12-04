import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recebimento } from '../compartilhado/model/recebimento';
import { RecebimentoService } from '../compartilhado/service/recebimento.service';
import { RecebimentoAdicionarComponent } from '../dialog/recebimento-adicionar/recebimento-adicionar.component';

@Component({
  selector: 'app-recebimento',
  templateUrl: './recebimento.component.html',
  styleUrls: ['./recebimento.component.scss'],
})
export class RecebimentoComponent implements OnInit {
  recebimentos: Recebimento[] = [];
  colunasVisiveis: string[] = [
    'id',
    'nome',
    'valor',
    'mes',
    'ano',
    'dataCadastro',
    'agrupamento',
    'acao',
  ];

  constructor(
    private recebimentoService: RecebimentoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.recebimentoService.listarTodos().subscribe((result: Recebimento[]) => {
      this.recebimentos = result ? result : [];
    });
  }

  deletar(id: number): void {
    this.recebimentoService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }

  abrirDialogAdicionar() {
    const dialogRef = this.dialog.open(RecebimentoAdicionarComponent);

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
