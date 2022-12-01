import { Component } from '@angular/core';
import { DespesaFixa } from '../compartilhado/model/despesa-fixa';
import { DespesaFixaService } from '../compartilhado/service/despesa-fixa.service';

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

  constructor(private despesaFixaService: DespesaFixaService) {}

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
}
