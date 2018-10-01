import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  @Input() anuncioVisualizar: Anuncio;

  @Output() eventoFechar: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fechar() {
    this.eventoFechar.emit();
  }

}
