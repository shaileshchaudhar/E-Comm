import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../data-type';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL :any='http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  ngOnInit(){}
  addProducts(data:Products){
   return  this.http.post(this.URL,data)
  }
  productList(){
    return this.http.get(this.URL);
  }
  deleteProduct(id:number){
   return  this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id:string){
     return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }
  UpdatedProduct(data:Products){
    return this.http.put<Products>(`http://localhost:3000/products/${data.id}`,data)
  }
}
