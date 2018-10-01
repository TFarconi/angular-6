import { Component, OnInit, Input } from '@angular/core';

import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-home-card-anuncio',
  templateUrl: './home-card-anuncio.component.html',
  styleUrls: ['./home-card-anuncio.component.css']
})
export class HomeCardAnuncioComponent implements OnInit {

  @Input() anuncioCard: Anuncio;
  exibeVisualizar: boolean;
  anuncioVisualizado: Anuncio;

  constructor() { }

  public visualizarAnuncio() {
    this.anuncioVisualizado = this.anuncioCard;
    this.exibeVisualizar = true;
  }

  ngOnInit() {
    this.exibeVisualizar = false;
  }

  public fechar(): void {
    this.exibeVisualizar = false;
  }

}
