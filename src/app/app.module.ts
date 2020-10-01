import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';

import { MaterialModule } from './material.module';
import { AllMaterialModules } from "./material.module"

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { IndexComponent } from './components';
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
import { SpecialsComponent } from './components';

import { SliderItemDirective } from "./components/directive/slider-item.directive";
import { CarouselComponent } from './components';
import { MainThemeComponent } from './components/theme/main-theme/main-theme.component';
import { BrandsComponent } from './components/theme/brands/brands.component';
import { AutomotiveComponent } from './components/specials/automotive/automotive.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

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
    SearchBarComponent,
    NestedDropdownComponent,
    OffersComponent,
    CompactDropdownComponent,
    SpecialsComponent,
    SliderItemDirective,
    CarouselComponent,
    MainThemeComponent,
    BrandsComponent,
    AutomotiveComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModules,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
