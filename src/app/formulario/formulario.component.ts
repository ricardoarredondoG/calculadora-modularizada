import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA:number;
  operandoB:number;
  @Output() resultado = new EventEmitter<number>();

  sumar() : void{
    this.resultado.emit(this.operandoA+this.operandoB);
  }
  

}
