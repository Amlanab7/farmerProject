import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FarmerRegistrationFormComponent } from './components/farmer-registration-form/farmer-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FarmerRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
