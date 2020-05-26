import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

public cartItems : any[];

public totamt;

hide;

cartheadertotal;

  constructor(private prodserv:ProductserviceService) { }

  ngOnInit() {

  this.cartItems = this.prodserv.cartitems;

  
  this.prodserv.getTotalamt()
  .subscribe(value => {
      this.totamt = value;
  });

  this.prodserv.getHideButton().subscribe(h =>{
    this.hide = h;
  });


  this.prodserv.getTotalItems()
  .subscribe(value => {
      this.cartheadertotal = value;
  });

  }



remove(cart){
  this.prodserv.removeItems(cart);
  this.prodserv.updateTotalItems(this.cartheadertotal-cart.qty);
  this.prodserv.updateHideButtonFlase(cart);
}

purchase(){
  this.prodserv.updateTotalItems(0);
 this.prodserv.clearcart();
  this.prodserv.updateTotalAmount();
  // this.prodserv.updateHide();
  // console.log(this.hide);
  for (let keys in this.hide)
  {
    this.hide[keys]=false;
  }
 
  setTimeout(() => {
    alert("Thank You! Visist us again.")
  }, 1000);


}


}
