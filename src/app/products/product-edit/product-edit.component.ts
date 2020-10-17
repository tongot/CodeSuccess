
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProductResolved } from '../../Models/IModel';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage: string;
  Addmode = false;

  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
  }

  private currentProduct: IProduct;
  private originalProduct: IProduct;

  get product(): IProduct {
    return this.currentProduct;
  }
  set product(value: IProduct) {
    this.currentProduct = value;
    // Clone the object to retain a copy
    this.originalProduct = value ? { ...value } : null;
  }

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
     this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      const resolvedData: IProductResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onProductRetrieved(resolvedData.product);
    });
  }

  onProductRetrieved(product: IProduct): void {
    this.product = product;
    if (!product) {
      this.pageTitle = 'No product found';
    } else {
      if ( product.id === '0' ) {
        this.pageTitle = 'Add Product';
        this.router.navigate(['/products,0, edit']);
      } else {
        this.pageTitle = `Edit Product: ${product.name}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product.id === '0') {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.name} was deleted`);
    } else {
      if (confirm(`Are you sure you want to delete  ${this.product.name}?`)) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => this.onSaveComplete(`${this.product.name} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
    this.router.navigateByUrl('products');
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentProduct = null;
    this.originalProduct = null;
  }

  saveProduct(): void {
    if (this.isValid()) {
      if (this.product.id === '0') {
        this.productService.createProduct(this.product).subscribe({
          next: () => { this.onSaveComplete(`The new ${this.product.name} was saved`);
                        this.router.navigate(['/products']);
        },
          error: err => this.errorMessage = err
        });
      } else {
        this.productService.updateProduct(this.product).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product.name} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
     if (message) {
    // this.messageService.addMessage(message);
    }
     this.reset();

    // Navigate back to the products page
     this.router.navigate([' ']);
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};

    // 'info' tab
    if (this.product.name &&
      this.product.name.length >= 5 ) {
      // tslint:disable-next-line: no-string-literal
      this.dataIsValid['info'] = true;
    } else {
      // tslint:disable-next-line: no-string-literal
      this.dataIsValid['info'] = false;
    }

    // 'tags' tab
    if (this.product.category &&
      this.product.category.length >= 5) {
      // tslint:disable-next-line: no-string-literal
      this.dataIsValid['tags'] = true;
    } else {
      // tslint:disable-next-line: no-string-literal
      this.dataIsValid['tags'] = false;
    }
  }
}
