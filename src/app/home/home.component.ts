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
   this.ofertas = this.ofertasService.getOfertas();
   
   console.log(this.ofertas);
   console.log(this.ofertas[0].imagens[0].url);

   let teste:any
    teste = this.ofertas[0].imagens[0]
   console.log(teste.url)
   
  }

}
