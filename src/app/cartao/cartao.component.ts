import { Component, OnInit } from '@angular/core';
import { Cartao } from '../compartilhado/model/cartao';
import { CartaoService } from '../compartilhado/service/cartao.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {

  cartoes: Cartao[] = [];

  constructor(private cartaoService: CartaoService) { }


  ngOnInit(): void {

    this.buscarTodos()
  }

  buscarTodos(): void {
    this.cartaoService.listarTodos().subscribe(
      (result: Cartao[]) => {
        this.cartoes = result ? result : [];
      }
    );
  }



}
