import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBidderComponent } from './components/login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './components/login-farmer/login-farmer.component';
import { LoginComponent } from './components/login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'src/app/about',component:AboutusComponent},
  {path:'src/app/contact',component:ContactusComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'home', component:HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'farmer-welcome', component:FarmerWelcomeComponent},
  {path:'auction-request', component:AuctionRequestComponent},
{path:'farmerregister', component:FarmerRegistrationComponent},
{path:'bidderregister', component:BidderRegistrationComponent},
{path:'login',component:LoginComponent},
{path:'loginfarmer',component:LoginFarmerComponent},
{path:'loginbidder',component:LoginBidderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
