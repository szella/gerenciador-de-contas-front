import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Despesa } from '../model/despesa';

const URL = environment.url_api + "/despesas"

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(`${URL}`);
  }
}
