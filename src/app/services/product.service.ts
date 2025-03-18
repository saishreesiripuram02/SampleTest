import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product[]=[]

  constructor( private httpClient:HttpClient) { }


   fromJson(){
    return this.httpClient.get<Product[]>("assets/products.json")
   }

}
