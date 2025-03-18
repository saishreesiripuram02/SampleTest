import { Component, OnInit } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  name:string = "saishree";

  get isEmpty(){
    const a = this.name && this.name.trim().length > 0 ? false : true;
    console.log(a);
    return a;
  }
}
