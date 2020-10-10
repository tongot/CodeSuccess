import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'assets/api/products.json';
  length: any;

  constructor(private http: HttpClient, private route: Router) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.dataUrl)
      .pipe(
        tap(data => console.log(`All   products: ${JSON.stringify(data)}`))
      );
  }
  getProduct(id: string): Observable<IProduct> {
    if (id === '0') {
      return of(this.initializeProduct());
    }
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<IProduct>(url)
      .pipe(
        tap(data => console.log(`getProduct: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'app/json' });
    product.id = null;
    return this.http.post<IProduct>(this.dataUrl, product, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete<IProduct>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );

  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dataUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product, { headers })
      .pipe(
        tap(() => console.log('Product: ' + product.id + 'has been updated' )),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  private handleError(err: { error: {
    message: any; };
     status: any; body: { error: any;
     };
    }) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


  private initializeProduct(): IProduct {
    return {
      id: null,
      name: null,
      image: null,
      department: null,
      promotion: null,
      description: null,
      price: null,
      discount: null,
      category: null,
      rating: null
    };
  }
}
