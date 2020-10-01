import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminwelcome',
  templateUrl: './adminwelcome.component.html',
  styleUrls: ['./adminwelcome.component.css']
})
export class AdminwelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   

}
UserRequests(){
  this.router.navigate(['/admin-user-approval']);

}
AuctionRequests(){
  this.router.navigate(['admin-sell-auction']);

}
BidRequests(){
  this.router.navigate(['admin-bid-auction']);
}
SellCrop(){
  this.router.navigate(['adminsold']);
}
}
