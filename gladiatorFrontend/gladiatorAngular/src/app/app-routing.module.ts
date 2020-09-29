import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminBidAuctionComponent } from './components/admin-bid-auction/admin-bid-auction.component';
import { AdminSellAuctionComponent } from './components/admin-sell-auction/admin-sell-auction.component';
import { AdminUserApprovalsComponent } from './components/admin-user-approvals/admin-user-approvals.component';
import { AdminwelcomeComponent } from './components/adminwelcome/adminwelcome.component';
import { AuctionRequestComponent } from './components/auction-request/auction-request.component';
import { BidRequestComponent } from './components/bid-request/bid-request.component';
import { BidderRegistrationComponent } from './components/bidder-registration/bidder-registration.component';
import { BidderWelcomeComponent } from './components/bidder-welcome/bidder-welcome.component';
import { BiddingAuctionComponent } from './components/bidding-auction/bidding-auction.component';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { FarmerWelcomeComponent } from './components/farmer-welcome/farmer-welcome.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBidderComponent } from './components/login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './components/login-farmer/login-farmer.component';
import { LoginComponent } from './components/login/login.component';
import { SoldHistoryComponent } from './components/sold-history/sold-history.component';
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
{path:'bidder-welcome',component:BidderWelcomeComponent},
{path:'bidding-auction',component:BiddingAuctionComponent},
{path:'admin-welcome',component:AdminwelcomeComponent},
{path:'admin-user-approval',component:AdminUserApprovalsComponent},
{path:'admin-bid-auction',component:AdminBidAuctionComponent},
{path:'soldhistory',component:SoldHistoryComponent},
{path:'bid-request',component:BidRequestComponent},
{path:'admin-sell-auction',component:AdminSellAuctionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
