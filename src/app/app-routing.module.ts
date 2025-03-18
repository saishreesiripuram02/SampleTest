import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:"product",
     loadChildren:() => import("./product-list/product-list.module").then(mod => mod.ProductListModule)
  },
  {
    path:"view-cart",
    loadChildren:()  => import("./view-cart/view-cart.module").then(mod =>mod.ViewCartModule)
  },
{
  path:"add",
  loadChildren:() => import('./product-add/product-add.module').then(mod => mod.ProductAddModule)
},
{
  path:"items",
  loadChildren: () => import("./items/items.module").then(mod => mod.ItemsModule)
},
  {
    path:"",
    redirectTo:"product",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
