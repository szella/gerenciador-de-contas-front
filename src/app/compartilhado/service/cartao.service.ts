import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Cartao } from '../model/cartao';

const URL = environment.url_api + "/cartoes"

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${URL}`);
  }
}
