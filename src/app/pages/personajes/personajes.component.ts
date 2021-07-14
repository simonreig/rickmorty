import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/personajes.model';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajesServices: RymService) { }
  
  public personajes: Result[] = [];
  page:number = 1;

  ngOnInit(): void {
    this.personajesServices.cargarPersonajes(this.page).subscribe(resp => {
      this.personajes = resp;
  });
  }

  buscar(name:string){
    this.personajesServices.buscar(name).subscribe(resp => this.personajes = resp);
  }

  onScrollDown() {
    this.page += 1;
    this.personajesServices.cargarPersonajes(this.page).subscribe(resp => {
    this.personajes.push(...resp); });
  }

}