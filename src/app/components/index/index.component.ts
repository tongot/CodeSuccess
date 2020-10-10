import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/product';
import { ProductService } from 'src/app/services/product-service';
// import {ShortenTextPipe } from './shorten-text.pipe';




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

constructor(private productService: ProductService,
            private route: ActivatedRoute ) { }

sectionTitle = 'Products';
errorMessage = 'Cant get products';
imageLength = 100;
imageWidth = 90;
// product: IProductResolved;
rating: number;
// tslint:disable-next-line: variable-name
arrayFilter = '';

// filteredProducts: IProduct[] = [];
products: IProduct[] = [];


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (err: string) => this.errorMessage = err
    );
    console.log(this.errorMessage);
  }

}
