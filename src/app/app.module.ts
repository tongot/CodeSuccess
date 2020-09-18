import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AllMaterialModules } from './material.module';

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
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
