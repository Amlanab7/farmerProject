import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { auctionRequest } from 'src/app/Model/auctionRequest';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-auction-request',
  templateUrl: './auction-request.component.html',
  styleUrls: ['./auction-request.component.css']
})
export class AuctionRequestComponent implements OnInit {
  request:auctionRequest=new auctionRequest();
  requestForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute) {
    this.requestForm = this.formBuilder.group({
      'cropType': [this.request.cropType, [Validators.required]],
			'cropName': [this.request.cropName, [Validators.required]],
      'fertType': [this.request.fertType, [Validators.required]],
      'quantity': [this.request.quantity, [Validators.required]],
      'basePrice': [this.request.basePrice, [Validators.required]]
      
      });
   }

  ngOnInit(): void {
  }
  onSubmit(){
  //   console.log(requestForm);requestForm:auctionRequest,,private cropservice:CroptableService

  // this.cropservice.addAuctionRequest(requestForm).subscribe(data=>{
  //   console.log(data)
  //   alert("auction request placed successfully");
    //this.router.navigate(['contactus']);
  //})
}

}
