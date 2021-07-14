import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { EspisodiosComponent } from './pages/espisodios/espisodios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsPersonajesComponent } from './components/cards-personajes/cards-personajes.component';
import { ListaUbicacionesComponent } from './components/lista-ubicaciones/lista-ubicaciones.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {SlideshowModule} from 'ng-simple-slideshow';
import { EpisodioCardComponent } from './components/episodio-card/episodio-card.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonajesComponent,
    EspisodiosComponent,
    UbicacionesComponent,
    CardsPersonajesComponent,
    ListaUbicacionesComponent,
    EpisodioCardComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    SlideshowModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }