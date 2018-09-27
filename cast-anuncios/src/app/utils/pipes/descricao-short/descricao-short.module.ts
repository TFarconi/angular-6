import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescricaoShortPipe } from './descricao-short.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DescricaoShortPipe
  ],
  exports: [
    DescricaoShortPipe
  ]
})
export class DescricaoShortModule { }
