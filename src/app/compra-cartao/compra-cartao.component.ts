import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompraCartao, CompraCartaoAgrupado } from '../compartilhado/model/compra-cartao';
import { CompraCartaoService } from '../compartilhado/service/compra-cartao.service';
import { CompraCartaoAdicionarComponent } from '../dialog/compra-cartao-adicionar/compra-cartao-adicionar.component';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';



interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-compra-cartao',
  templateUrl: './compra-cartao.component.html',
  styleUrls: ['./compra-cartao.component.scss'],
})
export class CompraCartaoComponent implements OnInit {
  comprasCartaoAgrupado: CompraCartaoAgrupado[] = [];
  colunasVisiveis: string[] = [
    'id',
    'nome',
    'valor',
    'mes',
    'ano',
    'dataCadastro',
    'agrupamento',
    'cartao',
    'acao',
  ];

  constructor(
    private compraCartaoService: CompraCartaoService,
    public dialog: MatDialog
  ) {       }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.compraCartaoService
      .listarTodosAgrupados()
      .subscribe((result: CompraCartaoAgrupado[]) => {
        console.log(result);
        this.comprasCartaoAgrupado = result ? result : [];
      });
  }

  deletar(id: number): void {
    this.compraCartaoService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }

  abrirDialogAdicionar() {
    const dialogRef = this.dialog.open(CompraCartaoAdicionarComponent);

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
