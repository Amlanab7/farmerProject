import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { HomeComponent } from './components/home/home.component';
import { SubRegisterPageComponent } from './components/sub-register-page/sub-register-page.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'subregister', component:SubRegisterPageComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'home', component:HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'farmer-welcome', component:FarmerWelcomeComponent},
  {path:'auction-request', component:AuctionRequestComponent},
{path:'farmerregister', component:FarmerRegistrationComponent},
{path:'bidderregister', component:BidderRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
