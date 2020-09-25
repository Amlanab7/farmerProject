import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { auctionRequest } from 'src/app/Model/auctionRequest';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-auction-request',
  templateUrl: './auction-request.component.html',
  styleUrls: ['./auction-request.component.css']
})
export class AuctionRequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private cropservice:CroptableService) {
    this.requestForm = this.formBuilder.group({
			cropType: new FormControl(),
      cropName: new FormControl(),
      fertType: new FormControl(),
      quantity: new FormControl(),
      basePrice: new FormControl()
      });
   }

  ngOnInit(): void {
  }
  onSubmit(requestForm:auctionRequest){
    console.log(requestForm);

  this.cropservice.addAuctionRequest(requestForm).subscribe(data=>{
    console.log(data)
    alert("auction request placed successfully");
    this.router.navigate(['contactus']);
  })
}

}
