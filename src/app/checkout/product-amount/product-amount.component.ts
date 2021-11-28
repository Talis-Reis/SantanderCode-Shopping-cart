import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.css']
})
export class ProductAmountComponent implements OnInit {

  @Input() productAmount: any

  @Output() removeItem = new EventEmitter()
  @Output() addItem = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  removeUnit(){
    this.removeItem.emit(this.productAmount)
  }

  addUnit(){
    this.addItem.emit(this.productAmount)
  }
}
