import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizarAnuncioComponent } from './visualizar-anuncio.component';
import { TelefoneModule } from '../../utils/pipes/telefone/telefone.module';
import { DescricaoShortModule } from '../../utils/pipes/descricao-short/descricao-short.module';

@NgModule({
  imports: [
    CommonModule,
    TelefoneModule,
    DescricaoShortModule
  ],
  declarations: [
    VisualizarAnuncioComponent
  ],
  exports: [
    VisualizarAnuncioComponent
  ]
})
export class VisualizarAnuncioModule { }
