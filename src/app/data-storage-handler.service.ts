import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageHandlerService {

  public totalQuantity: number = 0
  
  constructor() { }

  checkTheStorageLocal(): any[]{
    const check = JSON.parse(localStorage.getItem("Products") ?? '[]')
    return check
  }
  checkQuantityOfProducts(id: number): number {
    const checkItens: any[] = this.checkTheStorageLocal();
    const values = checkItens.findIndex(currentId => currentId.id === id)
    return values;
  }

  addLocalStorage(product: any): void{
    localStorage.setItem("Products", JSON.stringify(product))
  }

  preparingProductsForLocalStorage(product: any){
    let stateLocalStorage: any[] = this.checkTheStorageLocal();
    const productsStorageLocal: number = this.checkQuantityOfProducts(product.id)
    let quantidade: number = product.qtd
    if (productsStorageLocal < 0) {
      quantidade += 1
      product.qtd = quantidade
      stateLocalStorage = [...stateLocalStorage, product]
    }
    else {
      quantidade = stateLocalStorage[productsStorageLocal].qtd
      quantidade += 1
      stateLocalStorage[productsStorageLocal].qtd = quantidade    
    }
    this.addLocalStorage(stateLocalStorage)
  }
  
}
