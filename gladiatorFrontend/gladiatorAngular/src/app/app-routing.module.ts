import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { HomeComponent } from './components/home/home.component';
import { SubRegisterPageComponent } from './components/sub-register-page/sub-register-page.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'subregister', component:SubRegisterPageComponent},
{path:'farmerregister', component:FarmerRegistrationComponent},
{path:'bidderregister', component:BidderRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
