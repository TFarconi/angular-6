import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Anuncio } from '../models/anuncio.model';
import { Observable } from 'rxjs';
import { AnuncioFiltro } from '../models/anuncio-filtro.model';

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

  public update(anuncio: Anuncio): Observable<Object> {
    return this.http.put<Anuncio>(this.anuncioUrl + `/${anuncio.id}`, anuncio);
  }

  public findAll(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.anuncioUrl);
  }

  public findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(this.anuncioUrl + '?id=' + id);
  }

  public getAnunciosByFilter(anuncioFiltro: AnuncioFiltro): Observable<Anuncio[]> {
    if (anuncioFiltro.tipo !== 'null' && anuncioFiltro.nome !== null) {
      return this.http.get<Anuncio[]>(this.anuncioUrl + '?tipo=' + anuncioFiltro.tipo + '&nome_like=' + anuncioFiltro.nome);
    } else if (anuncioFiltro.tipo !== 'null') {
      return this.http.get<Anuncio[]>(this.anuncioUrl + '?tipo=' + anuncioFiltro.tipo);
    } else {
      return this.http.get<Anuncio[]>(this.anuncioUrl + '?nome_like=' + anuncioFiltro.nome);
    }
  }

}
