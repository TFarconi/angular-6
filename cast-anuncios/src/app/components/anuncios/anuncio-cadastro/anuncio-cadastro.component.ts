import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { Anuncio } from '../../../models/anuncio.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { Imagem } from '../../../models/imagem.model';
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
  id: any;
  labelButton = 'Salvar';

  @ViewChild('inputFile') componenteImagem: ElementRef;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private tipoAnuncioService: TipoAnuncioService,
              private anuncioService: AnuncioService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tipoAnuncio = this.tipoAnuncioService.findAll();
    this.createFormgroup();

    this.activatedRoute.params.subscribe(parametrosURL => {
      this.id = parametrosURL['id'];
      if (this.id !== undefined) {
        this.labelButton = 'Alterar';
        this.anuncioService.findById(this.id).subscribe(data => {
          this.anuncio = data[0];
          this.imagem = this.anuncio.imagem;
          this.updateValuesFormControl();
        });
      }
    });
  }

  public updateValuesFormControl() {
    Object.keys(this.anuncio).forEach(atributo => {
      if (this.formulario.get(atributo)) {
        this.formulario.get(atributo).setValue(this.anuncio[atributo]);
      }
    });
  }

  public createFormgroup(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
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
    // @viewChild para obter referencia do input file
    // console.log(this.componenteImagem.nativeElement.files);

    if (this.formulario.valid) {

      this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
      this.anuncio.imagem = this.imagem;

      if (this.id === undefined) {
        this.anuncioService.insert(this.anuncio).subscribe(resultado => {
          this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
          alert('Anuncio salvo com sucesso ' + resultado.id);
        });
      } else {
        this.anuncioService.update(this.anuncio).subscribe(_ => {
          alert('Anúncio alterado com sucesso');
          this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
        });
      }

    } else {
      alert('Formulário inválido, verifique os campos');
    }
  }

}
