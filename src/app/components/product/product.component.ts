import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductResolved } from 'src/app/Models/IModel';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  productId:string;

  constructor(private route: ActivatedRoute, private _productService:ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("id")
    this._productService.getProduct('').subscribe((product)=>{
      this.product= product[this.productId];
    })
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
