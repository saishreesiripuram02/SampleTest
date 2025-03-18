import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild([{
      path:"",
      component:ItemsComponent
    }])
  ]
})
export class ItemsModule { }
