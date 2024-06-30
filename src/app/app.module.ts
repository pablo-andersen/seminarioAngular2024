import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { ProductShoppingCartComponent } from './product-shopping-cart/product-shopping-cart.component';
import { LcContactComponent } from './lc-contact/lc-contact.component';
import { LcAboutUsComponent } from './lc-about-us/lc-about-us.component';
import { LcProductsComponent } from './lc-products/lc-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FlyoutDialogComponent } from './flyout-dialog/flyout-dialog.component';
import { provideHttpClient } from '@angular/common/http';
import { LcLoginComponent } from './lc-login/lc-login.component';
import { LcHomeComponent } from './lc-home/lc-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductShoppingCartComponent,
    LcContactComponent,
    LcAboutUsComponent,
    LcProductsComponent,
    InputIntegerComponent,
    FlyoutDialogComponent,
    LcLoginComponent,
    LcHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
