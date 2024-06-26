import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _shopList: Producto[] = [];
  shopList: BehaviorSubject<Producto[]> = new BehaviorSubject(this._shopList);

  constructor() { }

  addToCart(product: Producto) {
    let itemCart: Producto | undefined = this._shopList.find((item: Producto) => item.name === product.name);
    
    if (itemCart){
      itemCart.quantity += product.quantity;
    }
    else {
      this._shopList.push({...product});
    }  
    console.log(this._shopList); 
    this.shopList.next(this._shopList);
  }
}
