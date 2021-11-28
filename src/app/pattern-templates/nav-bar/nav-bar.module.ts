import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
