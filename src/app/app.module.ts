import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';

import { MaterialModule } from './material.module';
import { AllMaterialModules } from './material.module';

import {ProductsModule} from './products/products.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './components';
import { ThemeComponent } from './components';
import { SearchBarComponent } from './components';
import { NestedDropdownComponent } from './components';
import { OffersComponent } from './components';
import { CompactDropdownComponent } from './components';
import { HeaderComponent } from "./components";
import { FooterComponent } from "./components";
import { IndexComponent } from "./components";
import { LoginComponent } from './components';
import { SignupComponent } from './components';
import { CheckoutComponent } from './components';
import { CartComponent } from './components';
import { FavoritesComponent } from './components';
import { AboutComponent } from './components';
import { CareersComponent } from './components';
import { SearchComponent } from './components';
import { ThemeComponent } from './components';
import { SearchBarComponent } from './components';
import { NestedDropdownComponent } from './components';
import { OffersComponent } from './components';
import { CompactDropdownComponent } from './components';
import { AccountComponent } from './components';
import { MyAccountComponent } from './components';

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
    ThemeComponent,
    ShortenTextPipe,
    SearchBarComponent,
    NestedDropdownComponent,
    OffersComponent,
    CompactDropdownComponent,
    AccountComponent,
    MyAccountComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
