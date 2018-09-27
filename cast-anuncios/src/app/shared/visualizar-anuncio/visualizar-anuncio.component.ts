import { Component, OnInit, Input } from '@angular/core';

import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  @Input() anuncioVisualizar: Anuncio;

  constructor() { }

  ngOnInit() {
  }

}
