import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent implements OnInit {

  @Input() textoModal: string;
  @Input() idExclusao: number;

  @Output() eventoModalExcluir: EventEmitter<number> = new EventEmitter();
  @Output() eventoModalCancelar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public excluir() {
    this.eventoModalExcluir.emit(this.idExclusao);
  }

  public cancelar() {
    this.eventoModalCancelar.emit('teste');
  }

}
