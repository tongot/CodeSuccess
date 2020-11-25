import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { IProductResolved } from '../../shared/product';
import { ProductService } from '../../services/product-service';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

  export class ProductResolver implements Resolve<IProductResolved> {
    constructor(private productService: ProductService) { }
    // tslint:disable-next-line: typedef
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IProductResolved> {
const id = route.paramMap.get('id');

if (!isNaN(+id)) {
  const message = `Product ${id} was not a string `;
  console.error(message);
  return of({ product: null, error: message });
}
return this.productService.getProduct(id)
  .pipe(
    map((product) => ({ product })),
    catchError(error => {
      const message = `Retrieval error: ${error}`;
      console.log(message);
      return of({ product: null, error: message });
    })
  );
  }
}
