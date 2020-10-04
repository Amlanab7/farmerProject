import { BrowserModule } from '@angular/platform-browser'
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
import { RouterModule } from '@angular/router';
import { LoginFarmerComponent } from './components/login-farmer/login-farmer.component';
import { LoginBidderComponent } from './components/login-bidder/login-bidder.component';
import { HttpClientModule } from '@angular/common/http';
import { BidderWelcomeComponent } from './components/bidder-welcome/bidder-welcome.component';
import { BiddingAuctionComponent } from './components/bidding-auction/bidding-auction.component';
import { AdminUserApprovalsComponent } from './components/admin-user-approvals/admin-user-approvals.component';
import { AdminBidAuctionComponent } from './components/admin-bid-auction/admin-bid-auction.component';
import { SoldHistoryComponent } from './components/sold-history/sold-history.component';
import { BidRequestComponent } from './components/bid-request/bid-request.component';
import { AdminSellAuctionComponent } from './components/admin-sell-auction/admin-sell-auction.component';
import { AuthguardService } from './service/authguard.service';
import { DocsUploadComponent } from './docs-upload/docs-upload.component';
import { BidderDocsuploadComponent } from './components/bidder-docsupload/bidder-docsupload.component';
import { FarmerMarketplaceComponent } from './components/farmer-marketplace/farmer-marketplace.component';
import { FarmerPreviousbidsComponent } from './components/farmer-previousbids/farmer-previousbids.component';
import { AdminSoldComponent } from './components/admin-sold/admin-sold.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminauthService } from './services/adminauth.service';
import { BidderauthService } from './services/bidderauth.service';
import { FarmerauthService } from './services/farmerauth.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CommonModule } from '@angular/common';

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
    LoginFarmerComponent,
    LoginBidderComponent,
    BidderWelcomeComponent,
    BiddingAuctionComponent,
    AdminUserApprovalsComponent,
    AdminBidAuctionComponent,
    SoldHistoryComponent,
    BidRequestComponent,
    AdminSellAuctionComponent,
    DocsUploadComponent,
    BidderDocsuploadComponent,
    FarmerMarketplaceComponent,
    FarmerPreviousbidsComponent,
    AdminSoldComponent,
    ForgotPasswordComponent,
    UserDetailsComponent,
    


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    AuthguardService,
    AdminauthService,
    BidderauthService,
    FarmerauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
