import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AccountComponent,
  IndexComponent,
  LoginComponent,
  SignupComponent,
  MyAccountComponent,
} from './components';

const routes: Routes = [
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
        path: '',
        component: MyAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
