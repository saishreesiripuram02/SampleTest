import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductsComponent } from './Components/products/products.component';
import { SearchComponent } from './Components/search/search.component';
import {  RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';






const routes: Routes = [{
  path :"",
  component :ProductListComponent

}]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent,
    SearchComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class ProductListModule { }
