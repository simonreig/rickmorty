import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/models/ubicaciones.model';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit {

  constructor(private rymService: RymService) { }

  page: number = 1;
  lugares: Ubicacion[]=[];

  ngOnInit(): void {
  this.rymService.cargarLugares(this.page).subscribe(resp => {
  this.lugares = resp;});
  }

  onScroll(){
    this.page +=1;
    this.rymService.cargarLugares(this.page).subscribe(resp => {
    this.lugares.push(...resp);
    ;});
  }

}