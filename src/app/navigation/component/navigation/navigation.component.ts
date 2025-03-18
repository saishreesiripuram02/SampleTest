import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  cartValue:Product[]=[]

  constructor( private cartService:CartService){
      this.cartValue = this.cartService.getValue()

  }


}
