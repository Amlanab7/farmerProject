import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropsforSale } from 'src/app/Model/CropsforSale';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-bidding-auction',
  templateUrl: './bidding-auction.component.html',
  styleUrls: ['./bidding-auction.component.css']
})
export class BiddingAuctionComponent implements OnInit {
  saleItems:CropsforSale[];
  constructor(private service:CroptableService,private router:Router) { }

  ngOnInit(): void {
    
    this.service.BidderMarket().subscribe(data=>{
      this.saleItems = data;
      console.log(data);
     
     
    });
  
      // var user = JSON.parse(localStorage.getItem('userData'));
      
    }
    onBid(CID){
      
      alert(CID);
      this.router.navigate(["/bid-request"],CID);
      // this.router.navigate("/bid-request");
    }
    
       

    


}
