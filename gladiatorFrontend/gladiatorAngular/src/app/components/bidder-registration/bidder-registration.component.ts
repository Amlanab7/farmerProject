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
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private service:UsertableService,private router:Router) { }

  ngOnInit() {
    this.registerForm =this.formBuilder.group({
      
      'full_name': ['', [
      Validators.required
      ]],
       'contactno': ['', [
      Validators.required
     ]],
      'email': ['', [
         Validators.required,
         Validators.email
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
    
    get f() 
    { 
      return this.registerForm.controls;
    }

    onNext() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.service.addUser(this.registerForm.value).subscribe(data=>{
          console.log(data);
         localStorage.setItem("userData",JSON.stringify(data));
          this.router.navigate(['/docs-upload']);
         
        },(e)=>{
          console.log(e);
    
        })
        console.log(this.registerForm.value);
        // alert("User Added Successfully");
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
