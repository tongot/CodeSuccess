import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, IProductResolved } from '../../Models/IModel';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: IProductResolved =
      // tslint:disable-next-line: no-string-literal
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
  }

  onProductRetrieved(product: IProduct): void {
    this.product = product[5];

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.name}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
