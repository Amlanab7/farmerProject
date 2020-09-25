import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FarmerWelcomeComponent} from './components/farmer-welcome/farmer-welcome.component'

const routes: Routes = [
  {path:'contactus',component:ContactusComponent},
  {path:'auction-request',component:AuctionRequestComponent},
  {path:'farmer-welcome',component:FarmerWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
