import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service';
import { IProduct, IProductResolved } from 'src/app/shared/product';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  products: IProduct[];
  errorMessage: string;
   product: IProduct;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (err: string) => this.errorMessage = err
    );
    console.log(this.errorMessage);
  }

  onProductRetrieved(product: IProduct): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.name}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
