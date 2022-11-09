import { API_URL } from './app.api';
import { Oferta } from './model/Oferta.model';
import { HttpClient, HttpClientJsonpModule, HttpResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  

  


  constructor(private http : HttpClient) { }

  public getOfertas(): Observable<Oferta[]>{
    //return this.ofertas
    //efetura uma requisição http e retornar uma promise

    return this.http.get<Oferta[]>(`${API_URL}/ofertas?destaques=true`)
        
  }

  public getOfertasCategoria(categoria: string): Observable<Oferta[]>{
    return  this.http.get<Oferta[]>(`${API_URL}/ofertas?categoria=${categoria}`)
    
  }

  public getOfertasPorId(id : number): Observable<Oferta[]>{
    return  this.http.get<Oferta[]>(`${API_URL}/ofertas?id=${id}`)
  }

  public getComoUsar(id: number): Observable<String>{
    return this.http.get<string>(`${API_URL}/como-usar?id=${id}`)
  }

  public getOndeFica(id: number): Observable<String>{
    return this.http.get<string>(`${API_URL}/onde-fica?id=${id}`)
  }

  public pesquisaOferta(ofertaPesquisada: string): Observable<Oferta[]>{
 
    return this.http.get<Oferta[]>(`${API_URL}/ofertas?descricao_oferta_like=${ofertaPesquisada}`)  
      .pipe(
        map((resposta: any) => resposta),
        retry(10))
    
  }

}
