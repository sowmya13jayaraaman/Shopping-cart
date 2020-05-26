import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

hide;

total;

products;

searchText;


  constructor(private prodserv:ProductserviceService) { }

  ngOnInit() {

this.products = this.prodserv.getProducts();

console.log(this.products);
  this.prodserv.getTotalItems()
  .subscribe(value => {
      this.total = value;
  });

this.prodserv.getHideButton().subscribe(h =>{
  this.hide = h;
});

}

  addToCart(product){
    this.prodserv.addToCart(product);
    this.prodserv.updateTotalItems(this.total+1);
  }

  increase(productId)
  {
    console.log(productId);
    this.prodserv.incrementqty(productId);
this.prodserv.updateTotalItems(this.total+1);
  }

  decrease(productId){
    this.prodserv.decrementqty(productId);
    this.prodserv.updateTotalItems(this.total-1);
  }

}
