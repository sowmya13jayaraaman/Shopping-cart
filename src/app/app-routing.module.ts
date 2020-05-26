import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';


const routes: Routes = [

{path:'',component:ProductManagerComponent},
{path:'products',component:ProductManagerComponent},
{path:'cart',component:ShopCartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
