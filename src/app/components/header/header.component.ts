import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product-service';
// import {CartComponent} from './components/cartcartcomponent.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit{

  constructor(
    private cartService: CartService
  ) { }
   cartProductCount = 0;
 // tslint:disable-next-line: typedef
 openMenu(upArrow, downArrow) {
    upArrow.style.display = 'none';
    downArrow.style.display = '';
  }
  // tslint:disable-next-line: typedef
  closeMenu(upArrow, downArrow) {
    upArrow.style.display = '';
    downArrow.style.display = 'none';
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    });
  }
}
