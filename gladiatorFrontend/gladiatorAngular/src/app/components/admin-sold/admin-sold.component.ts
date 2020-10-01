import { Component, OnInit } from '@angular/core';
import { AdminMarket } from 'src/app/Model/AdminMarket';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-admin-sold',
  templateUrl: './admin-sold.component.html',
  styleUrls: ['./admin-sold.component.css']
})
export class AdminSoldComponent implements OnInit {
  listofCrops:AdminMarket[];
  tempcrop:AdminMarket;
  constructor(private service:CroptableService) { }

  ngOnInit(): void {
    this.service.AdminMarket().subscribe(data=>{
      this.listofCrops = data;
      console.log(this.listofCrops);
    });
  }
  onSold(CID){
    alert(CID);
    this.service.soldByAdmin(CID).subscribe(data=>{
     this.tempcrop = data;
     console.log(this.tempcrop);
     alert("crop sold in auction");
   });

}
}
