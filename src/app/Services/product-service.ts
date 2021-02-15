import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError, Subject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private route: Router) { }
  private dataUrl = 'assets/data';
  products: IProduct[];

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.dataUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<IProduct>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    product.id = null;
    return this.http.post<IProduct>(this.dataUrl, product)
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete<IProduct>(url)
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.dataUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product)
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the Product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: typedef
  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    // console.error(err);
    return throwError(errorMessage);
  }


  private initializeProduct(): IProduct {
    return {
      id: 0,
      name: null,
      image: null,
      department: null,
      promotion: null,
      description: null,
      price: null,
      discount: null,
      category: null,
      rating: null,
      tags: []
    };
  }


 
}
