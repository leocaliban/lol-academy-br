import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = `http://localhost:4200/api/`;

  URL_LEAGUE = 'http://localhost:4200/league/';

  NOME_INVOCADOR = 'aidenlie';

  API_KEY = 'RGAPI-b31e1209-9af1-4bad-b1ff-267a9532909c';

  constructor(private http: HttpClient) { }

  buscarInvocador(nomeInvocador: string): Observable<any> {
    return this.http.get<any>(`${this.URL}${nomeInvocador}?api_key=${this.API_KEY}`);
  }

  buscarLigasDoInvocador(idInvocador: string) {
    return this.http.get<any>(`${this.URL_LEAGUE}${idInvocador}?api_key=${this.API_KEY}`);
  }
}
