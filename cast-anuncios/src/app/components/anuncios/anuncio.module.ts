import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmaExclusaoModule } from '../../shared/confirma-exclusao/confirma-exclusao.module';
import { VisualizarAnuncioModule } from '../../shared/visualizar-anuncio/visualizar-anuncio.module';

@NgModule({
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    ConfirmaExclusaoModule,
    VisualizarAnuncioModule
  ],
  declarations: [
    AnuncioConsultaComponent,
    AnuncioCadastroComponent
  ]
})
export class AnuncioModule { }
