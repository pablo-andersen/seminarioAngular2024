import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../producto';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-product-shopping-cart',
  templateUrl: './product-shopping-cart.component.html',
  styleUrl: './product-shopping-cart.component.scss'
})
export class ProductShoppingCartComponent {

  shoppingCartList$ : Observable<Producto[]>;

  constructor(private cartService: ProductCartService) {
    this.shoppingCartList$ = this.cartService.shopList.asObservable();
  }

  removeFromCart(product: Producto): void {
    this.cartService.removeFromCart(product);
  }

  total(): Observable<number> {
    return this.shoppingCartList$
           .pipe<number>(
            map((products: Producto[]) => products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
    );
  }

}
