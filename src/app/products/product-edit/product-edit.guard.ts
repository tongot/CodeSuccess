import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent>  {

  canDeactivate(component: ProductEditComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

     if (component.isDirty) {
      {const productName = component.product.name || 'New Product';
       return confirm(`Are you sure about making changes to ${productName}?`);
    }
  }

  }
}
