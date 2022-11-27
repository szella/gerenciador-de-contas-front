import { Component } from '@angular/core';
import { Despesa } from '../compartilhado/model/despesa';
import { DespesaService } from '../compartilhado/service/despesa.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss'],
})
export class DespesaComponent {
  despesas: Despesa[] = [];

  constructor(private despesaService: DespesaService) {}

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
}
