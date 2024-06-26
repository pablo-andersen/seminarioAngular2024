import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  
  @Input()
  quantity : number = 0;

  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();  

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  } 

  upQuantity(): void {  
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el máximo de stock disponible.");
    }
  }

  changeQuantity(event: any): void {
    console.log(event.target.value);
    if(event.target.value <= this.max && event.target.value >= 0){
      this.quantity = event.target.value;
      this.quantityChange.emit(this.quantity);
    }
    else if(event.target.value > this.max){
      this.quantity = this.max;   
      this.maxReached.emit("El valor ingresado supera el stock, que es de "+this.max+" unidades.");   
    }
    else{
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }
}
