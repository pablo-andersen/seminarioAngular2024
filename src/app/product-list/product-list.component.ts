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
  title = 'Catálogo';
  message: string = '';
  showModal : boolean = false;
  productos: Producto[] = [];

   constructor(private cartService: ProductCartService, 
              private productsDataService: ProductDataService) {    
   }

   ngOnInit() {
    this.productsDataService.getAllProducts().subscribe((products: Producto[]) => {
      this.productos = products;
      this.syncStockWithCart();
    });

    this.cartService.stockUpdates$.subscribe((updatedProduct : Producto | null) => {
      if (updatedProduct) {
        let product: Producto | undefined = this.productos.find(p => p.name === updatedProduct.name);
        if (product) {
          product.stock = updatedProduct.stock;
          console.log('Stock actualizado para: ' + product.name + ' stock: ' + product.stock);
        }
      }
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

  syncStockWithCart() {
    let cartProducts: Producto[] = this.cartService.getCartProducts();
    cartProducts.forEach(cartProduct => {
      let product : Producto | undefined = this.productos.find(p => p.name === cartProduct.name);
      if (product) {
        product.stock -= cartProduct.quantity;
      }
    });
  }
}
