import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bids } from 'src/app/Model/bids';
import { CropsforSale } from 'src/app/Model/CropsforSale';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-farmer-previousbids',
  templateUrl: './farmer-previousbids.component.html',
  styleUrls: ['./farmer-previousbids.component.css']
})
export class FarmerPreviousbidsComponent implements OnInit {
  CID;
  UID;
  marketcrop: CropsforSale;
  previousbids:Bids[];
  constructor(private route:ActivatedRoute,private service:CroptableService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {console.log(data);});
    
    this.CID = this.route.snapshot.paramMap.get('CID');
    var UID = JSON.parse(localStorage.getItem('userData'));
    this.UID=UID.UID;
    
    console.log(this.CID);
    alert(this.CID+" "+this.UID);
  
    this.service.getCropbyCID(this.CID).subscribe(data=>{
      this.marketcrop = data;
      console.log(this.marketcrop);
    });
      this.service.PreviousBids(this.CID,this.UID).subscribe(
        
    );
     var bidData = JSON.parse(localStorage.getItem('bidData'));
     alert(bidData.CID+" "+bidData.crop_type);
  }

}