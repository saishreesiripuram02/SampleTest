import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes :Routes = [{
  path:"",
  component:ProductAddComponent,
  canDeactivate:[  (component:ProductAddComponent) => component.isEmpty]
}]

@NgModule({
  declarations: [
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class ProductAddModule { }
