import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { FarmerRegistrationFormComponent } from './components/farmer-registration-form/farmer-registration-form.component';

import { LoginComponent } from './components/login/login.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


    FarmerRegistrationFormComponent,

    LoginComponent,
    AuctionRequestComponent,
    FarmerWelcomeComponent,

    AboutusComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
