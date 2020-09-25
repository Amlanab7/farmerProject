import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { FarmerRegistrationFormComponent } from './components/farmer-registration-form/farmer-registration-form.component';
=======
import { LoginComponent } from './components/login/login.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 5adb174d063a607815d91ba6fb69319f9505e7b2

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    FarmerRegistrationFormComponent
=======
    LoginComponent,
    AuctionRequestComponent,
    FarmerWelcomeComponent
>>>>>>> 5adb174d063a607815d91ba6fb69319f9505e7b2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
