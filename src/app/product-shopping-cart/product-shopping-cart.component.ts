import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../producto';
import { Observable } from 'rxjs';

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

}
