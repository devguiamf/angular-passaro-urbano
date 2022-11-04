import { Oferta } from './model/Oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  url = 'http://localhost:3000/ofertas'
  urlDestaques = 'http://localhost:3000/ofertas?destaque=true'
  


  constructor(private http : HttpClient) { }

  public getOfertas(): Observable<Oferta[]>{
    //return this.ofertas
    //efetura uma requisição http e retornar uma promise

    return this.http.get<Oferta[]>(this.urlDestaques)
        
  }
}
