import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { DespesaFixa } from '../model/despesa-fixa';
import { DespesaFixaEditar } from '../model/despesa-fixa-editar';
import { DespesaFixaSalvar } from '../model/despesa-fixa-salvar';

const URL = environment.url_api + "/despesas-fixa"

@Injectable({
  providedIn: 'root'
})
export class DespesaFixaService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<DespesaFixa[]> {
    return this.http.get<DespesaFixa[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<DespesaFixa> {
    return this.http.get<DespesaFixa>(`${URL}/${id}`);
  }

  salvar(object: DespesaFixaSalvar): Observable<DespesaFixa> {
    return this.http.post<DespesaFixa>(`${URL}`, object)
  }

  editar(id: number, object: DespesaFixaEditar): Observable<DespesaFixa> {
    return this.http.put<DespesaFixa>(`${URL}/${id}`, object)
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
