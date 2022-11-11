import { OrdemCompraService } from './../ordem-compra.service';
import { Pedido } from '../model/Orderm-compra.model';

import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  formaPgmt = [
    {value: 'pg1', viewValue: 'Débito'},
    {value: 'pg2', viewValue: 'Crédito'},
    {value: 'pg3', viewValue: 'Boleto'},
    {value: 'pg4', viewValue: 'Pix'},
  ];

  formulario!: FormGroup;

  pedido: Pedido = {
    endereco: '', 
    numero: '', 
    complemento: '', 
    pagamento: ''
  }



  constructor(private formBuilder: FormBuilder, private ordermService : OrdemCompraService) { }


  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      endereco: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      complemento : [''],
      pagamento: ['',[Validators.required]]
    });
  }


  finalizar(){
   
  }

  selecionaPgmt(valor: string){
    this.pedido.pagamento = valor
  }

  finalizarCompra(){

    this.ordermService.efetivarCompra(this.pedido).subscribe(()=>{
      this.ordermService.showMessage('Pedido Realizado com sucesso')
    })
    
  }

 

}
