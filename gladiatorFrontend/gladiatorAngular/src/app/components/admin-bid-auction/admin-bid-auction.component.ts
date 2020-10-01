import { Component, OnInit } from '@angular/core';
import { BidRequest } from 'src/app/Model/Bidrequest';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-admin-bid-auction',
  templateUrl: './admin-bid-auction.component.html',
  styleUrls: ['./admin-bid-auction.component.css']
})
export class AdminBidAuctionComponent implements OnInit {
  listofBids:BidRequest[];
  tempbid:BidRequest;
  constructor(private service:CroptableService) { }

  ngOnInit(): void {
    this.service.getAllBids().subscribe(data=>{
      this.listofBids = data;
      console.log(this.listofBids);
    });
  }
  onAccept(BIID){
    
    this.service.acceptbid(BIID).subscribe(data=>{
     this.tempbid = data;
     console.log(this.tempbid);
     alert("Bid request approved");
   });

  }
  onReject(BIID){
   this.service.rejectbid(BIID).subscribe(data=>{
     this.tempbid = data;
     console.log(this.tempbid);
     alert("Bid request rejected");
   });

}

}
