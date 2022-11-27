import { Component, OnInit } from '@angular/core';
import { CompraCartao } from '../compartilhado/model/compra-cartao';
import { CompraCartaoService } from '../compartilhado/service/compra-cartao.service';

@Component({
  selector: 'app-compra-cartao',
  templateUrl: './compra-cartao.component.html',
  styleUrls: ['./compra-cartao.component.scss'],
})
export class CompraCartaoComponent implements OnInit {
  ComprasCartao: CompraCartao[] = [];

  constructor(private compraCartaoService: CompraCartaoService) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.compraCartaoService
      .listarTodos()
      .subscribe((result: CompraCartao[]) => {
        this.ComprasCartao = result ? result : [];
      });
  }

  deletar(id: number): void {
    this.compraCartaoService.deletar(id).subscribe(() => {
      this.buscarTodos();
    });
  }
}
