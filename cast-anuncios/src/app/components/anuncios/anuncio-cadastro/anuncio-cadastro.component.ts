import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { Anuncio } from '../../../models/anuncio.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { Imagem } from '../../../models/imagem.model';
import { Router } from '@angular/router';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css'],
  providers: [ TipoAnuncioService ]
})
export class AnuncioCadastroComponent implements OnInit {

  formulario: FormGroup;

  tipoAnuncio: Observable<TipoAnuncio[]>;

  imagem: Imagem;

  anuncio: Anuncio;

  constructor(private router: Router,
              private tipoAnuncioService: TipoAnuncioService,
              private anuncioService: AnuncioService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tipoAnuncio = this.tipoAnuncioService.findAll();
    this.formulario = this.formBuilder.group({
        tipo: [null, Validators.required],
        nome: [null, Validators.required],
        descricao: [null, Validators.required],
        valor: [null, Validators.required],
        contato: [null, Validators.required]
    });
  }

  public campoValido(campo: string): boolean {
    const formControl = this.formulario.get(campo);
    if (campo.toLocaleUpperCase() === 'TIPO') {
      return formControl.value === 'null' && (formControl.touched || formControl.dirty);
    } else {
      return formControl.invalid && (formControl.touched || formControl.dirty);
    }
  }

  public onSelectFile(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (o: any) => {
        // console.log(file.name, reader.result);
        this.imagem = new Imagem(file.name, reader.result);
      };
    }
  }

  public salvar(): void {
    if (this.formulario.valid) {
      this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
      this.anuncio.imagem = this.imagem;

      console.log(this.anuncio);
      this.anuncioService.insert(this.anuncio).subscribe(resultado => {
        this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
        alert('Anuncio salvo com sucesso ' + resultado.id);
      });
    } else {
      alert('Formulário inválido, verifique os campos');
    }
  }

}
