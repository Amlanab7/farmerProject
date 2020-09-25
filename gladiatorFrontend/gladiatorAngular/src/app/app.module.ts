import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import {NgForm} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';



//import { FarmerRegistrationFormComponent } from './components/farmer-registration-form/farmer-registration-form.component';


=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
>>>>>>> Stashed changes
import { LoginComponent } from './components/login/login.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
<<<<<<< Updated upstream
import { AdminwelcomeComponent } from './components/adminwelcome/adminwelcome.component';

=======
import{MaterialModule} from 'src/app/Material/material/material.module';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,



<<<<<<< Updated upstream
    //FarmerRegistrationFormComponent,
=======
  
>>>>>>> Stashed changes

    LoginComponent,
    AuctionRequestComponent,
    FarmerWelcomeComponent,

    AboutusComponent,
    ContactusComponent,
<<<<<<< Updated upstream
    AdminwelcomeComponent
=======
    FarmerRegistrationComponent,
    
>>>>>>> Stashed changes


  ],
  imports: [
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
