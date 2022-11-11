import { OfertasService } from './../../ofertas.service';
import { lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  ondeFica : string = ''

  constructor(
    private route : ActivatedRoute, 
    private ofertaService : OfertasService) 
  { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametro: any) =>{ 
      lastValueFrom(this.ofertaService.getOndeFica(parametro.id))
      .then((resposta : any) =>{
        this.ondeFica = resposta[0].descricao
      })

    })
  }

}
