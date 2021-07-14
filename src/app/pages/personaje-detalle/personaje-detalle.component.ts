import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RymService } from 'src/app/services/rym.service';
import { PersonajeDetail } from '../../models/personaje.model';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.css']
})
export class PersonajeDetalleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private personajeService: RymService) { }

  nombre: string = '';
  genero: string = '';
  especie: string = '';
  origen: string = '';
  location: string = '';
  cantEp: number = 0;
  image: string = '';

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.personajeService.getPersonaje(id).subscribe(
      (resp:any) =>{
        this.genero = resp.gender;
        this.nombre = resp.name;
        this.especie = resp.species;
        this.origen = resp.origin.name;
        this.location = resp.location.name;
        this.cantEp = resp.episode.length;
        this.image = resp.image;
      }
    );
  }

  volver(){
    window.history.back();
  }

}