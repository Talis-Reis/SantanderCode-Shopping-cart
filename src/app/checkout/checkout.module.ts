import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { CheckoutComponent } from './checkout.component';
import { ProductAmountComponent } from './product-amount/product-amount.component';
import { RouterModule } from '@angular/router';
import { ShippingDataComponent } from './shipping-data/shipping-data.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    ProductAmountComponent,
    ShippingDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckoutComponent
  ],
})
export class CheckoutModule { }
