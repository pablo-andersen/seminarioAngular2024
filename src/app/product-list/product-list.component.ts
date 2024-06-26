import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  message: string = '';
  showModal : boolean = false;
  productos: Producto[] = [];

   constructor(private cartService: ProductCartService, 
              private productsDataService: ProductDataService) {    
   }

   ngOnInit() {
    this.productsDataService.getAllProducts().subscribe((products: Producto[]) => {
      this.productos = products;
    });
   }


  addToCart(product: Producto): void {
    this.cartService.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(m:string){
    this.message = m;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
