import { Component, Input } from '@angular/core';
import { Ubicacion } from 'src/app/models/ubicaciones.model';

@Component({
  selector: 'app-lista-ubicaciones',
  templateUrl: './lista-ubicaciones.component.html',
  styleUrls: ['./lista-ubicaciones.component.css']
})
export class ListaUbicacionesComponent{

  @Input() lugares: Ubicacion[]=[];

}