import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productFromService : Product[] = [];
  productsSearching : Product[] =[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.fromJson().subscribe(products => {
      this.productFromService = products;
      this.productsSearching = products;
    });
  }


  serachingValue(searchValue : string){
    this.productsSearching = this.productFromService.filter( filteredValue =>
      filteredValue.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  }
}
  
