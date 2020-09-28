import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BidderRegistrationForm } from 'src/app/Models/BidderRegistrationForm';
import { UsertableService } from 'src/app/services/usertable.service';
@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {
  user : FormGroup;
  
  hide = true;
  constructor(private formBuilder:FormBuilder,private service:UsertableService,private router: Router) { }

  ngOnInit() {
    this.user= this.formBuilder.group({
        full_name: ['', [
      Validators.required
      ]],
      'contactno': ['', [
      Validators.required
      ]],
      'email': ['', [
        Validators.required,
       // Validators.email
     ]],
    'address_line1': ['', [
        Validators.required,
  ]],
      'address_line2': ['', [
        Validators.required,
   ]],
      'city': ['', [
        Validators.required,
     ]],
     'state': ['', [
      Validators.required,
    ]],
    'pincode': ['', [
       Validators.required,
     ]],
   
      'account_no': ['', [
       Validators.required,
   ]],
      'ifsc': ['', [
        Validators.required,
    ]],
     
     'password': ['', [
    Validators.required,
      ]],
      
  })
  }
  onSubmit() {
    this.service.addUser(this.user.value).subscribe(data=>{
      localStorage.setItem("userData",JSON.stringify(data));
      this.router.navigate(['/loginbidder']);
      
    },(e)=>{
      console.log(e);
 
    })
    console.log(this.user.value);
    alert("User Added Successfully");
   }

}
