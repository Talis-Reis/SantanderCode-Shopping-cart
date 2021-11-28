
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FooterComponent } from './pattern-templates/footer/footer.component';
import { HeaderCarroselComponent } from './pattern-templates/header-carrosel/header-carrosel.component';
import { NavBarModule } from './pattern-templates/nav-bar/nav-bar.module';
import { ProductsSessionModule } from './products-session/products-session.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CheckoutModule } from './checkout/checkout.module';
import { LOCALE_ID } from '@angular/core'
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderCarroselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavBarModule,
    ProductsSessionModule,
    AppRoutingModule,
    CheckoutModule,
    RouterModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
