import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { SearchingPipe } from './searching.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    ShopCartComponent,
    SearchingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
