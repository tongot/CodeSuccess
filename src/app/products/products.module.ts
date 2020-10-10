import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from './products/product-detail';
import {ProductEditComponent} from './products/product-edit';
import {ProductListComponent} from './products/product-list';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
   ProductDetailComponent,
   ProductEditComponent,
   ProductListComponent

  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProductsModule { }
