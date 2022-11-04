import { lastValueFrom } from 'rxjs';
import { Oferta } from './../model/Oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas? : Oferta[] 

  constructor( private ofertasService : OfertasService) { }

  ngOnInit(): void {
   //this.ofertas = this.ofertasService.getOfertas();
   
    lastValueFrom(this.ofertasService.getOfertas()) 
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
   .catch((err: Error) => {
    console.log(err);
   })
   
  }

}
