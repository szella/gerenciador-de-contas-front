import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CompraCartao } from '../model/compra-cartao';

const URL = environment.url_api + "/compras-cartao"

@Injectable({
  providedIn: 'root'
})
export class CompraCartaoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<CompraCartao[]> {
    return this.http.get<CompraCartao[]>(`${URL}`);
  }
}
