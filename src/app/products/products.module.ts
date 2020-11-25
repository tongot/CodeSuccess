import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { MaterialModule } from '../material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
   MaterialModule,
    ReactiveFormsModule,
     InMemoryWebApiModule,
    RouterModule.forChild([
  //  //  { path: '', redirectTo: 'products', pathMatch: 'full' },
  //       {
  //         path: ':id',
  //         component: ProductDetailComponent,
  //         //  resolve: { resolvedData: ProductResolver }
  //       },
  //       {
  //         path: ':id/edit',
  //         component: ProductEditComponent,
  //         canDeactivate: [ProductEditGuard],
  //         //  resolve: { resolvedData: ProductResolver },
  //     }
     ])
   ]
})
export class ProductsModule { }
