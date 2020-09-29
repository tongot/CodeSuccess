import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/product';
import { ProductService } from './services/product-service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

constructor(private productService: ProductService,
            private route: ActivatedRoute ) { }

sectionTitle = 'Automative Products';
errorMessage = 'Cant get products';
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
