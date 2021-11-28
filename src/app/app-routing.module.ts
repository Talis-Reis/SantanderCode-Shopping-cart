import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductsSessionComponent } from './products-session/products-session.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingDataComponent } from './checkout/shipping-data/shipping-data.component';

export const routes: Routes = [
  {path: '', component: ProductsSessionComponent},
  {path: 'cart', component: CheckoutComponent},
  {path: 'shippingData', component: ShippingDataComponent}
]

@NgModule({
  declarations: [],
  
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
