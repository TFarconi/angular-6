import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Anuncio } from '../models/anuncio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anuncioUrl: string;

  constructor(private http: HttpClient) {
    this.anuncioUrl = `${environment.apiBaseUrl}/anuncios`;
  }

  // public insert(anuncio: Anuncio): Observable<HttpResponse<Anuncio>> {
  //   const body = JSON.stringify(anuncio);
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<Anuncio>(this.anuncioUrl, body,
  //     {
  //       headers: httpHeaders,
  //       observe: 'response'
  //     });
  // }

  public insert(anuncio: Anuncio): Observable<Anuncio> {
    return this.http.post<Anuncio>(this.anuncioUrl, anuncio);
  }

}
