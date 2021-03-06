import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AnuncioConsultaComponent } from './components/anuncios/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './components/anuncios/anuncio-cadastro/anuncio-cadastro.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const ROTAS: Routes = [
  // localhost:4200/
  { path: '', component: HomeComponent },
  { path: 'anuncios', loadChildren: './components/anuncios/anuncio.module#AnuncioModule' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROTAS) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
