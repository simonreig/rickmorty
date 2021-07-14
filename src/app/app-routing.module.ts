import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspisodiosComponent } from './pages/espisodios/espisodios.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajeDetalleComponent } from './pages/personaje-detalle/personaje-detalle.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { JuegoComponent } from './pages/juego/juego.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'personajes', component: PersonajesComponent},
  {path:'episodios', component: EspisodiosComponent},
  {path:'ubicaciones', component: UbicacionesComponent},
  {path:'personajeDetalle/:id', component: PersonajeDetalleComponent},
  {path:'juego', component: JuegoComponent},

  {path:'**', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }