import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoShort'
})
export class DescricaoShortPipe implements PipeTransform {

  transform(valueDescricao: string, limite: number): any {

    if (valueDescricao.length > limite) {
      valueDescricao = valueDescricao.slice(0 , limite);
      valueDescricao = valueDescricao + '...';
      return valueDescricao;

    } else {
      return valueDescricao;
    }

  }

}
