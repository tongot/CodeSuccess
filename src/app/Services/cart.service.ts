import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  private dataUrl = 'assets/data';
  public cartItems = [];
  products = new Subject();
  constructor() { }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {

  }
   // // tslint:disable-next-line: adjacent-overload-signatures
  getProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }

  // tslint:disable-next-line: typedef
  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  // Add single product to the cart
  // tslint:disable-next-line: typedef
  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  // tslint:disable-next-line: typedef
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  // tslint:disable-next-line: typedef
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  // tslint:disable-next-line: typedef
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      total += item.price;
    });

    return total;
  }
}
