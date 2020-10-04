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
  
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private service:CroptableService) { }
    
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'crop_type': ['', [Validators.required]],
			'crop_name': ['', [Validators.required]],
      'fertilizer_type': ['', [Validators.required]],
      'quantity': ['', [Validators.required]],
      'base_price': ['', [Validators.required]],
      'ph':['',[Validators.required]],    
      });
  }
  get f() 
    { 
      return this.registerForm.controls;
    }
  onSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    var user = JSON.parse(localStorage.getItem('userData'));
    this.service.addAuctionRequest(user.UID,this.registerForm.value).subscribe(data=>{
      localStorage.setItem("cropData",JSON.stringify(data));
      this.router.navigate(['/farmer-welcome']);
      
    },(e)=>{
      console.log(e);
 
    })
    console.log(this.registerForm.value);
    alert("Auction Request Placed Successfully");
  
  }
}


