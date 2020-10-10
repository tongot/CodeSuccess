import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
  AccountComponent,
  IndexComponent,
  LoginComponent,
  SignupComponent,
  MyAccountComponent,
} from './components';

const routes: Routes = [
  {
    path: 'products',
   // canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: '', component: IndexComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'register',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'myacc',
        component: MyAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
