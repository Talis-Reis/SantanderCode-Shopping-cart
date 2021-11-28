import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.css']
})
export class ProductsGalleryComponent implements OnInit {

  @Input() products: any[] = [];

  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct(product: any): void{2
    this.selected.emit(product);
  }

  addedToCart(){
    Swal.fire({
      icon: 'success',
      title: 'Added to cart!',
      showConfirmButton: false,
      timer: 1000
    })
  }
  
}
