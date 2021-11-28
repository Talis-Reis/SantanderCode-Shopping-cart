import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from './../data-handler.service';

import { DataStorageHandlerService } from './../data-storage-handler.service';

@Component({
  selector: 'app-products-session',
  templateUrl: './products-session.component.html',
  styleUrls: ['./products-session.component.css']
})
export class ProductsSessionComponent implements OnInit {

  public arrayProducts: string[] = [];

  productsList = this.products.productsList
  constructor(private products: DataHandlerService, private productStorage: DataStorageHandlerService) { }

  ngOnInit(): void {
  }

  addProduct(event:any){
    this.arrayProducts = [...this.arrayProducts, event]
    this.productStorage.preparingProductsForLocalStorage(event)
  }

}
