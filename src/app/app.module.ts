import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';

import { AllMaterialModules, MaterialModule } from './material.module';


import {ProductsModule} from './products/products.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import { AccountService } from './Services/account.service';
import { NotificationService } from './Services/notification.service';

import { BannerCarouselComponent, FooterComponent, HeaderComponent, InfiniteCarouselComponent, ItemsSliderComponent, ProductSmallCardComponent, PromotionCardComponent } from './components';
import { IndexComponent } from './components';
import { LoginComponent } from './components';
import { SignupComponent } from './components';
import { CheckoutComponent } from './components';
import { CartComponent } from './components';
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
//import { InfiniteCarouselComponent } from './components/infinite-carousel/infinite-carousel.component';

// pipes
import {ShortenTextPipe } from './shorten-text.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    CartComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModules,
    FontAwesomeModule,
    ProductsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot({}, { delay: 1000 }),

    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    HttpClientModule,
  ],
  providers: [AccountService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [SnackComponent],
})
export class AppModule {}
