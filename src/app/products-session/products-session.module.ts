
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSessionComponent } from './products-session.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';


@NgModule({
  declarations: [
    ProductsSessionComponent,
    ProductsGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsSessionComponent
  ]
})
export class ProductsSessionModule { }
