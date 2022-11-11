import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './model/Orderm-compra.model';
import { API_URL } from './app.api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(private http : HttpClient, private snackBar : MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ["msg-sucess"]
    })
  }

  efetivarCompra(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${API_URL}/pedidos`, pedido)
    // .pipe(
    //   map((resposta: any) => resposta.json())
    // )
  }
  
}

