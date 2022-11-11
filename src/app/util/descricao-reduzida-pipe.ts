import { Pipe, PipeTransform } from "@angular/core";

//Criando PIPE personalizado
@Pipe ({
  name: 'truncarStr' 
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto : string, truncado: number){//recebe o texto a ser truncado e o valor onde vai ser truncado
        if(texto.length > 15){
            return texto.substring(0,truncado) + '...'//inicia da posição 0 da string e trunca no valor do parametro passado
        }return texto
    }
}