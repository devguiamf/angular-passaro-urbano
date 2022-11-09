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

  constructor(private route : ActivatedRoute, private ofertaService : OfertasService) {

    lastValueFrom(this.ofertaService.getOndeFica(this.route.parent?.snapshot.params['id']))
      .then((resposta : any) =>{
        this.ondeFica = resposta[0].descricao
      })

   }

  ngOnInit(): void {
  }

}
