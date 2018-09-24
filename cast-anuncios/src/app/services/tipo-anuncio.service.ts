import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TipoAnuncio } from '../models/tipo-anuncio.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAnuncioService {

  private tipoAnuncioUrl: string;

  tipoAnuncio: TipoAnuncio[] = [];

  constructor(private http: HttpClient) {
    this.tipoAnuncioUrl = `${environment.apiBaseUrl}/tipo-anuncio`;
  }

  findAll(): Observable<TipoAnuncio[]> {
    return this.http.get<TipoAnuncio[]>(this.tipoAnuncioUrl);
  }
}
