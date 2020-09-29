import { Component, OnInit } from '@angular/core';
import { auctionRequest } from 'src/app/Model/auctionRequest';
import { CropsforSale } from 'src/app/Model/CropsforSale';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-admin-sell-auction',
  templateUrl: './admin-sell-auction.component.html',
  styleUrls: ['./admin-sell-auction.component.css']
})
export class AdminSellAuctionComponent implements OnInit {
  listofCrops:auctionRequest[];
  tempcrop:auctionRequest;
  constructor(private service:CroptableService) { }

  ngOnInit(): void {
    this.service.getAllCrops().subscribe(data=>{
      this.listofCrops = data;
      console.log(this.listofCrops);
    });
  }
  onAccept(UID){
    alert(UID);
    this.service.accept(UID).subscribe(data=>{
     this.tempcrop = data;
     console.log(this.tempcrop);
     alert("crop auction request approved");
   });

  }
  onReject(UID){
   this.service.reject(UID).subscribe(data=>{
     this.tempcrop = data;
     console.log(this.tempcrop);
     alert("crop auction request rejected");
   });

}
}
