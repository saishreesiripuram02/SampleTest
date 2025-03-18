import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
  ]
})
export class NavigationModule { }
