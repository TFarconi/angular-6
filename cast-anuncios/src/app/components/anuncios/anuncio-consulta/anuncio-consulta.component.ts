import { Component, OnInit, Output } from '@angular/core';

import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnuncioService } from '../../../services/anuncio.service';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [ TipoAnuncioService ]
})
export class AnuncioConsultaComponent implements OnInit {

  formulario: FormGroup;
  anuncioFiltro: AnuncioFiltro;
  anuncios: Anuncio[];
  tipoAnuncio: Observable<TipoAnuncio[]>;
  nomeAnuncio: string;
  idAnuncio: number;
  exibeExclusao: boolean;

  constructor(private tipoAnuncioService: TipoAnuncioService,
              private anuncioService: AnuncioService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tipoAnuncio = this.tipoAnuncioService.findAll();
    this.buscarTudo();
    this.exibeExclusao = false;
    this.formulario = this.formBuilder.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
    });
  }

  public buscarTudo() {
    this.anuncioService.findAll().subscribe(result => {
      this.anuncios = result;
    });
  }

  public pesquisar() {
    this.anuncioFiltro = this.formulario.value;
    this.anuncioService.getAnunciosByFilter(this.anuncioFiltro).subscribe(result => {
      this.anuncios = result;
    });
  }

  public confirmaExclusao(anuncio: Anuncio): void {
    this.nomeAnuncio = anuncio.nome;
    this.idAnuncio = anuncio.id;
    this.exibeExclusao = true;
  }

  public cancelarAnuncio(mensagem: string): void {
    console.log(mensagem);
  }

  public excluirAnuncio(idExclusao: number) {
    this.anuncioService.delete(idExclusao).subscribe(_ => {
      alert('Anúncio de id: ' + idExclusao + ' removido com sucesso');
      this.anuncios = this.anuncios.filter(anuncio => anuncio.id !== idExclusao);
    });
  }

}
