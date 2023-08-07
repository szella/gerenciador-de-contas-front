import { Component, OnInit } from '@angular/core';
import { GastosPorAno } from '../compartilhado/model/gastos-por-ano';
import { GastoService } from '../compartilhado/service/gasto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.scss'],
})
export class GastoComponent implements OnInit {
  gastos: GastosPorAno[] = [];

  constructor(private cartaoService: GastoService) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.cartaoService.listarTodos().subscribe((result: GastosPorAno[]) => {
      this.gastos = result ? result : [];
      console.table(this.gastos)
    });
  }
}
