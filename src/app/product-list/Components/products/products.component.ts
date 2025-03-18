import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() product !: Product;


constructor( private cartService:CartService){

}

  onSubmit(){
    this.cartService.addToCart(this.product)
console.log(this.product)
  }



}
