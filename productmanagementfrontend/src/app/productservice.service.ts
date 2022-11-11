import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
      return this.http.get('http://localhost:8083/api/v1/products');
  }

  getProduct(id:number):Observable<any>{
    return this.http.get('http://localhost:8083/api/v1/products/'+`${id}`);
  }

  createProduct(product: Product) {
    return this.http.post('http://localhost:8083/api/v1/products',product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete('http://localhost:8083/api/v1/products/'+id)
  }
  
  updateProduct(id:number,updatedproduct:any):Observable<any>{
    return this.http.put('http://localhost:8083/api/v1/products/'+id,updatedproduct)
  }

}
