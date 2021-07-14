import { Component, Input } from '@angular/core';
import { Episodio } from 'src/app/models/episodios.model';

@Component({
  selector: 'app-episodio-card',
  templateUrl: './episodio-card.component.html',
  styleUrls: ['./episodio-card.component.css']
})
export class EpisodioCardComponent{

  @Input() episodio: Episodio[]=[];

}