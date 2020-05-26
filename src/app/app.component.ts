import { Component } from '@angular/core';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

total;


  constructor(private prodserv:ProductserviceService) { }

  ngOnInit() {

  this.prodserv.getTotalItems()
  .subscribe(value => {
      this.total = value;
  });
}

}
