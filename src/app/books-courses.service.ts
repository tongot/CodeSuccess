import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from './shared/product';
@Injectable({
  providedIn: 'root'
})
export class BooksCoursesService {
  private dataUrl = 'data/booksCourses.json';
  length: any;

  constructor(private http: HttpClient, private route: Router) { }
  getBooksCoursesProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl)
      .pipe(
        tap(data => console.log(`All  baby toddler products: ${JSON.stringify(data)}`))
      );
  }
  getBooksCoursesProduct(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeBooksCoursesProduct());
    }
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log(`getProduct: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  createBooksCoursesProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'app/json' });
    product.id = null;
    return this.http.post<Product>(this.dataUrl, product, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteBooksCoursesProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );

  }

  updateBooksCoursesProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dataUrl}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
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


  private initializeBooksCoursesProduct(): Product {
    return {
      id: '0',
      name: null,
      image: null,
      department: null,
      promotion: null,
      description: null,
      price: null,
      rating: null
    };
  }

}
