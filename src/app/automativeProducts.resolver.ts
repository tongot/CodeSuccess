// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { ProductResolved } from './shared/product';
// import { catchError } from 'rxjs/operators';



// @Injectable({
//     providedIn: 'root'
//   })

//   export class AutomativeProductsResolver implements Resolve<ProductResolved> {
//     constructor(private automative: AutomotiveService) { }
//     // tslint:disable-next-line: typedef
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const id = +route.paramMap.get('id');
//         return this.automative.getAutomativeProducts(id).pipe(
//         catchError(() => {
//           return null ;
//         })
//       );
//     }
//   }
