import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cartao } from '../compartilhado/model/cartao';
import { CartaoService } from '../compartilhado/service/cartao.service';
import { CartaoAdicionarComponent } from '../dialog/cartao-adicionar/cartao-adicionar.component';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})
export class CartaoComponent implements OnInit {
  cartoes: Cartao[] = [];
  colunasVisiveis: string[] = ['id', 'nome', 'acao'];

  constructor(private cartaoService: CartaoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.cartaoService.listarTodos().subscribe((result: Cartao[]) => {
      this.cartoes = result ? result : [];
    });
  }

  deletar(id: number): void {
    this.cartaoService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }

  abrirDialogAdicionar() {
    const dialogRef = this.dialog.open(CartaoAdicionarComponent);

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
