import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { GastosPorAno } from '../model/gastos-por-ano';

const URL = environment.url_api + "/gastos"

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<GastosPorAno[]> {
    return this.http.get<GastosPorAno[]>(`${URL}`);
  }
}
