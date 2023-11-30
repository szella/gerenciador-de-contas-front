import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cartao } from '../compartilhado/model/cartao';
import { CartaoService } from '../compartilhado/service/cartao.service';
import { CartaoFormularioComponent } from './cartao-formulario/cartao-formulario.component';

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
    const dialogRef = this.dialog.open(CartaoFormularioComponent, {
      data: { acao: 'criar' },
    });

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }

  abrirDialogEditar(id: number): void {
    const dialogRef = this.dialog.open(CartaoFormularioComponent, {
      data: { acao: 'editar', id },
    });

    dialogRef.afterClosed().subscribe((salvou: boolean) => {
      if (salvou) {
        this.buscarTodos();
      }
    });
  }
}
