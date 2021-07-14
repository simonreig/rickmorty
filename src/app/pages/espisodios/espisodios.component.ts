import { Component, OnInit } from '@angular/core';
import { Episodio } from 'src/app/models/episodios.model';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-espisodios',
  templateUrl: './espisodios.component.html',
  styleUrls: ['./espisodios.component.css']
})
export class EspisodiosComponent implements OnInit {

  constructor(private rymService: RymService) { }

  episodios: Episodio[]=[];
  page: number = 1;
  cargando: boolean = true;

  ngOnInit(): void {
    this.rymService.cargarEpisodios(this.page).subscribe(resp => {
      this.episodios = resp;
      this.cargando = false});
  }

  onScroll(){
    this.page += 1;
    this.rymService.cargarEpisodios(this.page).subscribe(resp => this.episodios.push(...resp));
  }

}