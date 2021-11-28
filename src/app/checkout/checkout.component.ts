import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataStorageHandlerService } from './../data-storage-handler.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartProducts: any[] = [];
  public totalToPay: number = 0;
  public totalQuantity: number = 0;
  public display: string = '';

  constructor(private productStorage: DataStorageHandlerService, private routes: Router) { }

  ngOnInit(): void {
    this.cartProducts = this.productStorage.checkTheStorageLocal();
    this.paymentTotal();
    this.displayButtonFinish();
  }

  alertFinish(): void{
    Swal.fire({
      icon: 'warning',
      title: 'Empty shopping cart!',
      html: 'Your shopping cart is empty, we are redirecting your session to our products page. Good shopping!',
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        location.replace('/')
      }
    })
  }

  displayButtonFinish(): void {
    if (this.totalQuantity === 0) {
      this.display = 'none'
    }
  }

  paymentTotal(): void {
    for (const produc of this.cartProducts) {
      this.totalToPay = this.totalToPay + (produc.price * produc.qtd)
      this.totalQuantity = this.totalQuantity + (produc.qtd)
    }
  }

  removeFromShoppingCart(): void {
    const productsFromTheLocalStorage = this.productStorage.checkTheStorageLocal()
    const selectedProducts = productsFromTheLocalStorage.filter(product => product.qtd !== 0)
    localStorage.setItem("Products", JSON.stringify(selectedProducts))
    this.cartProducts = this.productStorage.checkTheStorageLocal()
  }

  removeUnit(currentProduct: any): void {
    let localStorageState: any[] = this.productStorage.checkTheStorageLocal();
    const productsStorageLocal: number = this.productStorage.checkQuantityOfProducts(currentProduct.id)
    let quantityFromTheProduct: number = currentProduct.qtd
    let productPrice: number = currentProduct.price
    if (quantityFromTheProduct > 0) {
      quantityFromTheProduct -= 1
      localStorageState[productsStorageLocal].qtd = quantityFromTheProduct
      this.totalToPay -= productPrice;
      this.totalQuantity -= 1
      this.productStorage.addLocalStorage(localStorageState)
      this.cartProducts = this.productStorage.checkTheStorageLocal();
      if (quantityFromTheProduct === 0) {
        this.removeFromShoppingCart();
        this.displayButtonFinish();
        if (this.totalQuantity === 0) {
          this.alertFinish();
        }
      }
    }
  }

  addUnit(currentProduct: any): void {
    let localStorageState: any[] = this.productStorage.checkTheStorageLocal();
    const productsStorageLocal: number = this.productStorage.checkQuantityOfProducts(currentProduct.id)
    let quantityFromTheProduct: number = currentProduct.qtd
    let productPrice: number = currentProduct.price
    if (quantityFromTheProduct > 0) {
      quantityFromTheProduct += 1
      localStorageState[productsStorageLocal].qtd = quantityFromTheProduct
      this.productStorage.addLocalStorage(localStorageState)
      this.totalToPay += productPrice;
      this.totalQuantity += 1
      this.cartProducts = this.productStorage.checkTheStorageLocal();
    }
  }

}
