import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnuncioConsultaComponent } from './components/anuncios/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './components/anuncios/anuncio-cadastro/anuncio-cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {NgxMaskModule} from 'ngx-mask';
import ErrorHttpInterceptor from './utils/interceptors/error-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AnuncioConsultaComponent,
    AnuncioCadastroComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
