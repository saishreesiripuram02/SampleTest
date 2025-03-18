import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import {  RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';


const routes:Routes=[
  {
    path:"",
    component:ViewCartComponent,
    canActivate: [ () => {
         const cartService = inject(CartService);     
          return cartService.getValue().length > 0;
    }]
  }
]

@NgModule({
  declarations: [
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewCartModule { }
