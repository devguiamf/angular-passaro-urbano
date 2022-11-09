import { Oferta } from './../model/Oferta.model';
import { lastValueFrom} from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta? : Oferta
  
  tabs = [
    {Label: 'Como usar', link:'como-usar'},
    {Label: 'Onde fica', link:"onde-fica"}
  ]
   
  constructor(
     private route: ActivatedRoute,
     private ofertaService : OfertasService) { }
  

  ngOnInit(): void {

    lastValueFrom(this.ofertaService.getOfertasPorId(this.route.snapshot.params['id']))
      .then((resposta: any) => {

        this.oferta = resposta.shift()
    })    
      
  }

  ngOnDestroy(): void {
  }

}
