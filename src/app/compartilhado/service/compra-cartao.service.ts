import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CompraCartao, CompraCartaoAgrupado } from '../model/compra-cartao';
import { CompraCartaoEditar } from '../model/compra-cartao-editar';
import { CompraCartaoSalvar } from '../model/compra-cartao-salvar';

const URL = environment.url_api + '/compras-cartao';

@Injectable({
  providedIn: 'root',
})
export class CompraCartaoService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<CompraCartao[]> {
    return this.http.get<CompraCartao[]>(`${URL}`);
  }

  listarTodosAgrupados(): Observable<CompraCartaoAgrupado[]> {
    return this.http.get<CompraCartaoAgrupado[]>(`${URL}/agrupado`);
  }

  buscarPorId(id: number): Observable<CompraCartao> {
    return this.http.get<CompraCartao>(`${URL}/${id}`);
  }

  salvar(object: CompraCartaoSalvar): Observable<CompraCartao> {
    return this.http.post<CompraCartao>(`${URL}`, object);
  }

  editar(id: number, object: CompraCartaoEditar): Observable<CompraCartao> {
    return this.http.put<CompraCartao>(`${URL}/${id}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
