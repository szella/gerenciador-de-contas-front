import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Recebimento } from '../model/recebimento';
import { RecebimentoEditar } from '../model/recebimento-editar';
import { RecebimentoSalvar } from '../model/recebimento-salvar';

const URL = environment.url_api + '/recebimentos';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Recebimento[]> {
    return this.http.get<Recebimento[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<Recebimento> {
    return this.http.get<Recebimento>(`${URL}/${id}`);
  }

  salvar(object: RecebimentoSalvar): Observable<Recebimento> {
    return this.http.post<Recebimento>(`${URL}`, object);
  }

  editar(id: number, object: RecebimentoEditar): Observable<Recebimento> {
    return this.http.put<Recebimento>(`${URL}/${id}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
