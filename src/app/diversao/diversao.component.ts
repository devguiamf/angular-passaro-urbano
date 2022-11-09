import { OfertasService } from './../ofertas.service';
import { lastValueFrom } from 'rxjs';
import { Oferta } from './../model/Oferta.model';
import { Component, OnInit } from '@angular/core';
import { getLocaleFirstDayOfWeek, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  diversao? : Oferta[]
  
  constructor(private ofertasService : OfertasService) { }

  ngOnInit(): void {
  
  lastValueFrom(this.ofertasService.getOfertasCategoria('diversao'))
  .then((diversao : Oferta[] ) =>{
    this.diversao = diversao
    
  }).catch((err : Error) =>{
    console.log(err);
    
  })
  
  }

}
