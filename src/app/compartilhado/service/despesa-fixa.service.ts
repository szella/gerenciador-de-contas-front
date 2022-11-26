import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { DespesaFixa } from '../model/despesa-fixa';

const URL = environment.url_api + "/despesas-fixa"

@Injectable({
  providedIn: 'root'
})
export class DespesaFixaService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<DespesaFixa[]> {
    return this.http.get<DespesaFixa[]>(`${URL}`);
  }
}
