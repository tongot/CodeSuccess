
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product-service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 4;
  showImage = false;
  errorMessage = '';

  // tslint:disable-next-line: variable-name
  arrayFilter = '';
  get listFilter(): string {
    return this.arrayFilter;
  }
  set listFilter(value: string) {
    this.arrayFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  // tslint:disable-next-line: typedef

}
