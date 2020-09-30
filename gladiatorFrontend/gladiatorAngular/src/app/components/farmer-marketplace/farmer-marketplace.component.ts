import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropsforSale } from 'src/app/Model/CropsforSale';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-farmer-marketplace',
  templateUrl: './farmer-marketplace.component.html',
  styleUrls: ['./farmer-marketplace.component.css']
})
export class FarmerMarketplaceComponent implements OnInit {
marketcrops:CropsforSale[];
  constructor(private service:CroptableService,private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('userData'));
  
    this.service.FarmerMarketCrops(user.UID).subscribe(data=>{
      this.marketcrops = data;
      console.log(this.marketcrops);
    });
  }
  onView(CID){
      
    alert(CID);
    this.router.navigate(["/previousbids",CID]);
    // this.router.navigate("/bid-request");
  }
}
