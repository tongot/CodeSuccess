import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent, ProductDetailsComponent} from './components';

const routes: Routes = [
  { path: '',            component: IndexComponent},
  { path: ':title', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
