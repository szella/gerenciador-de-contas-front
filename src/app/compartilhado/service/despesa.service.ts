import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Despesa } from '../model/despesa';
import { DespesaEditar } from '../model/despesa-editar';
import { DespesaSalvar } from '../model/despesa-salvar';

const URL = environment.url_api + "/despesas"

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${URL}/${id}`);
  }

  salvar(object: DespesaSalvar): Observable<Despesa> {
    return this.http.post<Despesa>(`${URL}`, object)
  }

  editar(id: number, object: DespesaEditar): Observable<Despesa> {
    return this.http.put<Despesa>(`${URL}/${id}`, object)
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
