import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminwelcomeComponent } from './components/adminwelcome/adminwelcome.component';
import{MaterialModule} from 'src/app/Material/material/material.module';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { SubRegisterPageComponent } from './components/sub-register-page/sub-register-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,



    FarmerRegistrationComponent,

    LoginComponent,
    AuctionRequestComponent,
    FarmerWelcomeComponent,

    AboutusComponent,
    ContactusComponent,
    AdminwelcomeComponent,
    NavbarComponent,
    BidderRegistrationComponent,
    SubRegisterPageComponent


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
