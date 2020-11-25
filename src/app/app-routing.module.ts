import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
  AccountComponent,
  IndexComponent,
  LoginComponent,
  SignupComponent,
  MyAccountComponent,
  CheckoutComponent
} from './components';
import { CartComponent } from './components/cart/cart.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'checkout' , component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
    { path: 'products', component: ProductListComponent },
    {path: 'products/:id/edit' , component: ProductEditComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {
      path: 'login',
      component: LoginComponent,
    },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'register',
        component: SignupComponent,
      },
      {
        path: 'myacc',
        component: MyAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{preloadingStrategy: PreloadAllModules}*/)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
