import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

private hidebutton: BehaviorSubject<any> = new BehaviorSubject<any>({});

public cartitems = [];

private totamount: BehaviorSubject<number> = new BehaviorSubject<number>(0);



myProductsList = [
  {'id':1001, 'name':'Apple', 'price':70, 'img':'apple.jpg', 'qty':0},
  {'id':1002, 'name':'Mango', 'price':50, 'img':'mango.jpg', 'qty':0},
  {'id':1003, 'name':'Water Melon', 'price':30, 'img':'water-melon.jpg', 'qty':0},
  {'id':1004, 'name':'Cauliflower', 'price':45, 'img':'cauliflower.jpg', 'qty':0},
  {'id':1005, 'name':'Carrot', 'price':90, 'img':'carrot.jpg', 'qty':0},
  {'id':1006, 'name':'Orange', 'price':85, 'img':'orange.jpg', 'qty':0},
  {'id':1007, 'name':'Onion', 'price':120, 'img':'onion.jpg', 'qty':0},
  {'id':1008, 'name':'Tomato', 'price':60, 'img':'tomato.jpg', 'qty':0},
  {'id':1009, 'name':'Mosambi', 'price':55, 'img':'mosambi.jpg', 'qty':0}
]

  constructor() { }

getProducts()
{
  return this.myProductsList;
}

addToCart(product){
  product.qty = 1;
  this.cartitems.push(product);
  this.updateHideButtonTrue(product);
  this.total();

}

removeItems(cartItem){

    this.cartitems.splice(this.cartitems.findIndex(c => c.id === cartItem.id),1);
    this.total();
}

incrementqty(prodId){            

for(let i=0;i<this.myProductsList.length;i++){
  if(this.myProductsList[i].id === prodId){
    this.myProductsList[i].qty += 1;
  }
}

}

decrementqty(prodId){

  for(let i=0;i<this.myProductsList.length;i++){
    if(this.myProductsList[i].id === prodId){

      if(this.myProductsList[i].qty<=1){
        this.updateHideButtonFlase(this.myProductsList[i]);
        this.removeItems(this.myProductsList[i]);
    this.myProductsList[i].qty = 1; 
  }
  else{
    this.myProductsList[i].qty -=1; 
  }
  }
}
}


updateHide(){

 
  // for (let keys in this.hidebutton)
  // {
  //   this.hidebutton[keys]=false;
  // }
 
// this.hidebutton.next({...this.hidebutton.value});
  // Object.values(this.hidebutton).forEach((value)=>{
  //       value = false;
  //  });
  // _.mapValues(this.hidebutton[0], function() {
  //   return true;
  // });
  // for (var key in this.hidebutton) {
  //   this.hidebutton[key]= false;
  // }
// for(let val of Object.values(this.hidebutton)){
//   val = false;
// }
// Object.fromEntries(
//   Object.entries(this.hidebutton).map(([key,value])=>[key,value=false])
// );
// Object.keys(this.hidebutton).map(item => this.hidebutton[item] = false)
  // this.hidebutton[1003]=false ;

}

clearcart(){
  this.cartitems.length = 0;
}

total(){
  let t=0;
  for(let i=0;i<this.cartitems.length;i++){
    t = t + this.cartitems[i].qty * this.cartitems[i].price;
  }
 this.totamount.next(t);

}

getTotalamt(){
  return this.totamount.asObservable();
}

updateTotalAmount(){
  this.totamount.next(0);
}

getTotalItems(){
  return this.totalItems.asObservable();
}

updateTotalItems(items:number){
    this.totalItems.next(items);
}

getHideButton(){
  return this.hidebutton.asObservable();
}

updateHideButtonFlase(product){
  this.hidebutton.next({...this.hidebutton.value, [product.id]:false});
}

updateHideButtonTrue(product){
  this.hidebutton.next({...this.hidebutton.value, [product.id]:true});
}


}
