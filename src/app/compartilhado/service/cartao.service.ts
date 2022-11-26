import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Cartao } from '../model/cartao';
import { CartaoEditar } from '../model/cartao-editar';
import { CartaoSalvar } from '../model/cartao-salvar';

const URL = environment.url_api + "/cartoes"

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<Cartao> {
    return this.http.get<Cartao>(`${URL}/${id}`);
  }

  salvar(object: CartaoSalvar): Observable<Cartao> {
    return this.http.post<Cartao>(`${URL}`, object)
  }

  editar(id: number, object: CartaoEditar): Observable<Cartao> {
    return this.http.put<Cartao>(`${URL}/${id}`, object)
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
