import { lastValueFrom } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Oferta } from './../model/Oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {

  restaurante? : Oferta[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {

    lastValueFrom(this.ofertaService.getOfertasCategoria('restaurante'))
    .then((restaurante: Oferta[]) => {
      this.restaurante = restaurante
      
    }).catch((err : Error) =>{
      console.log(err);
      
    })
  }

}
