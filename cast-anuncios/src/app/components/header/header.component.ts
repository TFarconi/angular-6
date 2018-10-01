import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private subjectPesquisa: Subject<string> = new Subject<string>();
  private anuncios: Observable<Anuncio[]>;
  private anuncioVisualizado: Anuncio;
  private exibeVisualizar: boolean;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.exibeVisualizar = false;
    this.subjectPesquisa.pipe(// 1 - Pipe concatena operadores a serem executados
      debounceTime(1500), // 2 - Pausa a execução e aguarda a quantidade em milisegundos
      distinctUntilChanged(), // 3 - Retorna sempre o mesmo resultado a não ser que o filtro seja alterado
      map((texto: string) => { // 4 - Faz validações no texto digitado no input
        if (texto.trim() === '') {
          return new Observable<Anuncio[]>();
        }
        // 5 - Executa a pesquisa com o termo digitado no input
        return this.anuncioService.findByNome(texto);
      })
    ).subscribe(resultado => {
      console.log(resultado);
      this.anuncios = resultado;
    });
  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca);
  }

  public visualizarAnuncio(anuncio: Anuncio) {
    this.anuncioVisualizado = anuncio;
    this.exibeVisualizar = true;
    this.subjectPesquisa.next('');
  }

  public fechar(): void {
    this.exibeVisualizar = false;
  }

}
