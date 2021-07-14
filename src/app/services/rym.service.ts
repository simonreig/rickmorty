import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonajeResponse, Result } from '../models/personajes.model';
import { Ubicacion, UbicacionResponse } from '../models/ubicaciones.model';
import { Episodio, EpisodioResponse } from '../models/episodios.model';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  constructor(private http: HttpClient){}

  base_url:string = 'https://rickandmortyapi.com/api';

  cargarPersonajes(page:number): Observable<Result[]> {
    return this.http.get<PersonajeResponse>(`${this.base_url}/character?page=${page}`).pipe(
      map(resp => resp.results)
    );
  }

  getPersonaje(id:any){
    return this.http.get<PersonajeResponse>(`${this.base_url}/character/${id}`);
  }

  cargarLugares(page:number):Observable<Ubicacion[]>{
    return this.http.get<UbicacionResponse>(`${this.base_url}/location?page=${page}`).pipe(
      map(resp => resp.results)
    );
  }

  buscar(name: string):Observable<Result[]>{
    return this.http.get<PersonajeResponse>(`${this.base_url}/character/?name=${name}`).pipe(
      map(resp => resp.results)
    );
  }

  cargarEpisodios(page:number):Observable<Episodio[]>{
    return this.http.get<EpisodioResponse>(`${this.base_url}/episode?=${page}`).pipe(
      map(resp => resp.results));
  }

}