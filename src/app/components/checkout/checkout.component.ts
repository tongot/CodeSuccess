
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']})

export class  CheckoutComponent implements AfterViewInit , OnDestroy {

  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

stripe;
loading = false;
confirmation;

card: any;
cardHandler = this.onChange.bind(this);
error: string;
total =0;

constructor(
    private cd: ChangeDetectorRef, private cartService: CartService,
    private stripeService: AngularStripeService) {}

// tslint:disable-next-line: typedef
ngAfterViewInit() {
    this.stripeService.setPublishableKey('pk_test_2syov9fTMRwOxYG97AAXbOgt008X6NL46o').then(
      stripe => {
        this.stripe = stripe;
        const elements = stripe.elements();
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);

    });
  }

// tslint:disable-next-line: typedef
ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
  getTotal(): number {
    this.total = this.cartService.getTotalPrice();
    return this.total;
  }

// tslint:disable-next-line: typedef
onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

// tslint:disable-next-line: typedef
async onSubmit(form: NgForm) {
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Success!', token);
    }
  }

}
