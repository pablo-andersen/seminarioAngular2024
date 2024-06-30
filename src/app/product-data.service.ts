import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from './producto';

const BASE_URL = 'https://6672f5d86ca902ae11b28d2f.mockapi.io/api/v1/product';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  public getAllProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(BASE_URL)
            .pipe(
                  tap((productos: Producto[]) => productos.forEach(producto => producto.quantity = 0))
            );
  }
  
}
