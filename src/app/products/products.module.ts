import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditGuard } from './product-edit/product-edit.guard';
import { ProductResolver } from './product-edit/product-resolver.resolver';
import { MaterialModule } from '../material.module';
import {ProductEditInfoComponent} from './product-edit/product-edit-info/product-edit-info.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild([
        
      //{ path: '', redirectTo: 'products', pathMatch: 'full' },
        {
          path: ':id',
          component: ProductDetailComponent,
          resolve: { resolvedData: ProductResolver }
        },
        {
          path: ':id/edit',
          component: ProductEditComponent,
          canDeactivate: [ProductEditGuard],
          resolve: { resolvedData: ProductResolver },
      }
    ])
  ]
})
export class ProductsModule { }
