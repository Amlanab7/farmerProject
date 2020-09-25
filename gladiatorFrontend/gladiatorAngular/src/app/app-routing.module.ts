import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SubRegisterPageComponent } from './components/sub-register-page/sub-register-page.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'src/app/about',component:AboutusComponent},
  {path:'src/app/contact',component:ContactusComponent},
  {path:'subregister', component:SubRegisterPageComponent},
{path:'farmerregister', component:FarmerRegistrationComponent},
{path:'bidderregister', component:BidderRegistrationComponent},
{path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
