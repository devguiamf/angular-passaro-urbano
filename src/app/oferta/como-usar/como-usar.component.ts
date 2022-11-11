import { lastValueFrom } from 'rxjs';
import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})
export class ComoUsarComponent implements OnInit {

  comoUsar:any
  constructor(private route : ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {

    this.route.parent?.params.subscribe((parametro: any) =>{
      lastValueFrom(this.ofertaService.getComoUsar(parametro.id))
      .then((resposta : any) => {
        this.comoUsar = resposta[0].descricao        
        
      })
    })

    
    
  }
  
}
