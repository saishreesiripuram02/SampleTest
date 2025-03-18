import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cartValue: Product[] = []
 
   addToCart(product: Product) {
    if (product.instock > 0) {
      this.cartValue.push(product);
      product.instock--; 
    } else {
      alert("This product is out of stock!");
    }
  }
  
  getValue(){
    return this.cartValue
  }

  getQuantityDetails(): { id: number; quantity: number; product: Product }[] {
    const productMap = new Map<number, { id: number; quantity: number; product: Product }>();
  
    this.cartValue.forEach(product => {
      const existingProduct = productMap.get(product.id);
  
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        productMap.set(product.id, { id: product.id, quantity: 1, product });
      }
    });
  
    return Array.from(productMap.values());
  }
  

  

}
