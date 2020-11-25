import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CartService } from './services/cart.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// interceptors
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import {CacheInterceptor} from './shared/cache.interceptor';
import { authInterceptorProviders} from './interceptor/auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';
import { AllMaterialModules, MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {  HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import {ProductsModule} from './products/products.module';
import {UsersModule} from './users/users.module';




// tslint:disable-next-line: max-line-length
import {
  BannerCarouselComponent,
  FooterComponent,
  HeaderComponent,
  InfiniteCarouselComponent,
  ItemsSliderComponent,
  ProductSmallCardComponent,
  PromotionCardComponent,
  // BoardAdminComponent,
  } from './components';
import { IndexComponent } from './components';
import { LoginComponent } from './components';
import { SignupComponent } from './components';
import { CheckoutComponent } from './components';

import { FavoritesComponent } from './components';
import { AboutComponent } from './components';
import { CareersComponent } from './components';
import { SearchComponent } from './components';
import { SearchBarComponent } from './components';
import { NestedDropdownComponent } from './components';
import { OffersComponent } from './components';
import { AccountComponent } from './components';
import { MyAccountComponent } from './components';
import { SnackComponent } from './components/snack/snack.component';
import {Data} from './products/data';
import {CartComponent } from './components/cart/cart.component';

// pipes
import {ShortenTextPipe } from './shorten-text.pipe';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    FavoritesComponent,
    AboutComponent,
    CareersComponent,
    SearchComponent,
    ShortenTextPipe,
    SearchBarComponent,
    NestedDropdownComponent,
    OffersComponent,
    AccountComponent,
    MyAccountComponent,
    SnackComponent,
    BannerCarouselComponent,
    ItemsSliderComponent,
    InfiniteCarouselComponent,
    PromotionCardComponent,
    ProductSmallCardComponent,
    // BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   AllMaterialModules,
    MatDialogModule,
    FontAwesomeModule,
    ProductsModule,
    FlexLayoutModule,
    HttpClientModule,
   HttpClientInMemoryWebApiModule,
   InMemoryWebApiModule.forRoot(Data, { delay: 1000 }),

    FormsModule,
    ReactiveFormsModule,
    A11yModule
  ],
  providers: [CartService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackComponent ]
})
export class AppModule {}
