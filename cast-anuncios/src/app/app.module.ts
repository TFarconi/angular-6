import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeCardAnuncioComponent } from './components/home/home-card-anuncio/home-card-anuncio.component';
import ErrorHttpInterceptor from './utils/interceptors/error-http-interceptor';
import { TelefoneModule } from './utils/pipes/telefone/telefone.module';
import { VisualizarAnuncioModule } from './shared/visualizar-anuncio/visualizar-anuncio.module';
import { DescricaoShortModule } from './utils/pipes/descricao-short/descricao-short.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    HomeCardAnuncioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TelefoneModule,
    DescricaoShortModule,
    VisualizarAnuncioModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
