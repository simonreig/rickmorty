import { Component, OnInit } from '@angular/core';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rymService: RymService) { }

  meeseek: any;

  ngOnInit(): void {

    this.rymService.getPersonaje(242).subscribe((resp:any) => {
      this.meeseek = resp.image;
    });
  
  }

}