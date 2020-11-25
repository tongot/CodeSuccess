import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   cartItems: any[];
   totalAmmount: number;

  constructor(
    private cartService: CartService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.cartService.getProducts().subscribe(data => {
      this.cartItems = data;

      this.totalAmmount = this.cartService.getTotalPrice();
    });

  }

  // Remove item from cart list
  // tslint:disable-next-line: typedef
  removeItemFromCart(productId: any) {
     this.cartItems.map((item: { id: any; }, index: any) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    //  this.cartService.setProducts(this.cartItems);

     this.cartService.removeProductFromCart(productId);

  }

    // tslint:disable-next-line: typedef
    emptyCart() {
    this.cartService.emptryCart();
  }


}
