import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RymService } from '../../services/rym.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private personajeService: RymService) { }

  comenzar: boolean = false;
  personaje:any;
  primero: boolean = true;
  segundo: boolean = false;
  tercero: boolean = false;
  episodios: number = 0;
  name: string = '';
  genero: string = '';
  termino: boolean = false;
  puntaje: any = 0;

  ngOnInit(): void {
      this.comenzar = true;
  }

  empezar(){
    this.comenzar = false;
    let nroAleatorio = Math.random() * (50 - 1) + 1;
    let nro: number = Math.round(nroAleatorio);
    this.personajeService.getPersonaje(nro).subscribe((resp:any) => {
      this.personaje = resp;
    });
  }

  cambiar1(){
    this.primero = false;
    this.segundo = true;
    let nroAleatorio = Math.random() * (50 - 1) + 1;
    let nro: number = Math.round(nroAleatorio);
    if(this.episodios === this.personaje.episode.length){
      this.puntaje += 1;
      Swal.fire({
        title:'Excelente!',
        icon:'success'
      });
    }
    else{
      Swal.fire({
        title:'Incorrecto',
        icon:'error',
        text:`${this.personaje.name} aparece en ${this.personaje.episode.length} episodios`

      });
    }
    this.personajeService.getPersonaje(nro).subscribe((resp:any) => {
      this.personaje = resp;
    });
  }

  cambiar2(){
    this.segundo = false;
    this.tercero = true;
    let nroAleatorio = Math.random() * (50 - 1) + 1;
    let nro: number = Math.round(nroAleatorio);
    if(this.name === this.personaje.name){
      this.puntaje += 1;
      Swal.fire({
        title:'Excelente!',
        icon:'success',
        text:'Siguiente'
      });
    }
    else{
      Swal.fire({
        title:'Incorrecto',
        icon:'error',
        text:`El personaje se llama ${this.personaje.name}`
      });
    }
    this.personajeService.getPersonaje(nro).subscribe((resp:any) => {
      this.personaje = resp;
    });
  }

  terminado(){
    this.termino = true;
    if(this.genero === this.personaje.gender){
      this.puntaje += 1;
      Swal.fire({
        title:'Excelente!',
        icon:'success'
      });
    }
    else{
      Swal.fire({
        title:'Incorrecto',
        icon:'error',
        text:`El género del personaje es ${this.personaje.gender}`
      });
    }
  }

  jugardenuevo(){
    window.location.reload();
  }

}