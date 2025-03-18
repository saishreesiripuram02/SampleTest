import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Item {
  name: string;
  id : number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  items : Item[] = [];

  myForm = new FormGroup({
      name : new FormControl(null, [Validators.required])
  })

  constructor(private httpClient : HttpClient){
  }

  ngOnInit(): void {
    this.loadItems();
  }

  private loadItems(){
      this.httpClient.get<Item[]>("/api/items").subscribe(items => {
        this.items = items;
      });
  }


  add(){
    this.httpClient.post("/api/items", this.myForm.value).subscribe(resp => {
        this.loadItems();
        this.myForm.reset();
    })
  }

  delete(id:number){
    console.log("Clicked", id);
    this.httpClient.delete("/api/items/"+id).subscribe(resp => {
        this.loadItems();
    })
  
  }

}
