import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/personajes.model';

@Component({
  selector: 'app-cards-personajes',
  templateUrl: './cards-personajes.component.html',
  styleUrls: ['./cards-personajes.component.css']
})
export class CardsPersonajesComponent{

  @Input() personajes: Result[] = [];

  constructor(private router: Router) { }

  verPersonaje(personaje:Result){
    this.router.navigate(['personajeDetalle',personaje.id]);
  }

}