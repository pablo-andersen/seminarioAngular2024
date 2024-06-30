import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _shopList: Producto[] = [];
  shopList: BehaviorSubject<Producto[]> = new BehaviorSubject(this._shopList);

  private stockUpdateSubject: BehaviorSubject<Producto | null> = new BehaviorSubject<Producto | null>(null);
  stockUpdates$ = this.stockUpdateSubject.asObservable();

 
  constructor() { }

  addToCart(product: Producto) {
    let itemCart: Producto | undefined = this._shopList.find((item: Producto) => item.name === product.name);
    
    if (itemCart){
      itemCart.quantity += product.quantity;
    }
    else {
      this._shopList.push({...product});
    }  
    this.shopList.next(this._shopList);
  }

  removeFromCart(producto:Producto): void {
    let itemCart: Producto | undefined = this._shopList.find((item: Producto) => item.name === producto.name);    
    if (itemCart){
      console.log('removeFromCart - el producto es: ' + itemCart.name + ' -  quantity: ' + itemCart.quantity +' - stock: ' + itemCart.stock);
      producto.quantity += itemCart.quantity;
      this._shopList = this._shopList.filter((item: Producto) => item.name !== itemCart.name);
      this.shopList.next(this._shopList);
      this.stockUpdateSubject.next(producto);
      }
  }

  getCartProducts(): Producto[] {
    return this._shopList;
  }
  
}







