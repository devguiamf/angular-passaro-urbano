import { FormControl } from '@angular/forms';
import { Oferta } from './../model/Oferta.model';
import { Observable, Subject, switchMap, debounceTime, of, distinctUntilChanged, catchError, startWith, map, lastValueFrom } from 'rxjs';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})



export class TopoComponent implements OnInit {

//#################### VARIAVEIS ################################################################################################################


  ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()
  public oferta2!: Oferta[]
//##############################################################################################################################################

  constructor(private ofertaService: OfertasService) { }

//##############################################################################################################################################

  ngOnInit(): void {

    //===========================================================================================================
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // switchMap vai ser executado após 1 segundo
      distinctUntilChanged(), // se o termo pesquisado for o mesmo que o anterior, ele nao faz a requisição      
      switchMap((letras: string) => { //recebe o parametro passado pelo next
        
        if(letras.trim() ===  ''){// se a pesquisa for vazia
          //retornar observable de ofertas vazio
          return  of<Oferta[]>([])
        }
        
        return this.ofertaService.pesquisaOferta(letras)
      })
    ), catchError((erro) =>{
      console.log(erro);      
      return of<Oferta[]>([])
    })

    this.ofertas.subscribe((ofertas: Oferta[]) =>{
      this.oferta2 = ofertas
      console.log(this.oferta2);
      
      
    })
    //===========================================================================================================
  }

//##############################################################################################################################################


  pesquisa(letras :string): void{

    console.log('KeyUp', letras);
    this.subjectPesquisa.next(letras) // next e acionado pelo parametro recebido
  }

//##############################################################################################################################################


}
