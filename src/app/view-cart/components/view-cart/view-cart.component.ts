import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

interface Cart{
  id:number;
  quantity:number;
  product:Product;
}

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {

  displayedColumns: string[] = ['id','name', 'quantity', 'price'];
  dataSource : Cart[] = [];

  constructor(private cartService:CartService){
      this.dataSource = this.cartService.getQuantityDetails();
      console.log(cartService.getValue())

  }  

  get total(){
    if(this.dataSource.length > 0)
      return this.dataSource.map( data => data.quantity * data.product.cost).reduce((a,b)=> a+b)
    else
      return 0;
  }


}
