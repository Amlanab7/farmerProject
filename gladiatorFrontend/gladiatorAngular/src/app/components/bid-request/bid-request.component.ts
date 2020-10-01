import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CropsforSale } from 'src/app/Model/CropsforSale';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-bid-request',
  templateUrl: './bid-request.component.html',
  styleUrls: ['./bid-request.component.css']
})
export class BidRequestComponent implements OnInit {
  item:CropsforSale;
  newitem:CropsforSale;
  CID;
  UID;
  bidamount;

  constructor(private route:ActivatedRoute,private service:CroptableService) { 
    
      
  
}

  ngOnInit(): void {
    // var saleData = JSON.parse(localStorage.getItem('saleData'));
    // this.item=saleData;
    this.route.params.subscribe(data => {console.log(data);});
    
    this.CID = this.route.snapshot.paramMap.get('CID');
    var UIDforBid = JSON.parse(localStorage.getItem('userData'));
    this.UID=UIDforBid.UID;
    
    console.log(this.CID);
    alert(this.CID+" "+this.UID);
  
    this.service.getCropbyCID(this.CID).subscribe(data=>{
     this.item= data;console.log(data);localStorage.setItem("bidData",JSON.stringify(data));})
     var bidData = JSON.parse(localStorage.getItem('bidData'));
     
  }
 
  onPlaceBid(bidamount:number)
{
  //,bidamount,this.UID
  
    this.service.PlaceBidRequest(this.CID,bidamount,this.UID).subscribe(data=>{this.newitem=data;})
    alert("Your bid request placed successfully");

}
}
