import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { BidderRegistrationForm } from 'src/app/Models/BidderRegistrationForm';
import { UsertableService } from 'src/app/services/usertable.service';
@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {
  user : FormGroup
  bidderform:BidderRegistrationForm=new BidderRegistrationForm();
  hide = true;
  constructor(private formBuilder:FormBuilder,private service:UsertableService) { }

  ngOnInit() {
    this.user= this.formBuilder.group({
      FullName: [this.bidderform.FullName, [
      Validators.required
      ]],
      'ContactNumber': [this.bidderform.ContactNumber, [
      Validators.required
      ]],
      'EmailId': [this.bidderform.EmailId, [
        Validators.required,
        Validators.email
     ]],
    'AddressLine1': [this.bidderform.AddressLine1, [
        Validators.required,
  ]],
      'AddressLine2': [this.bidderform.AddressLine2, [
        Validators.required,
   ]],
      'City': [this.bidderform.City, [
        Validators.required,
     ]],
     'State': [this.bidderform.State, [
      Validators.required,
    ]],
    'ResidencePincode': [this.bidderform.ResidencePincode, [
       Validators.required,
     ]],
      'AccountNo': [this.bidderform.AccountNo, [
       Validators.required,
   ]],
      'IFSCcode': [this.bidderform.IFSCcode, [
        Validators.required,
    ]],
     'Aadhar': [this.bidderform.Aadhar, [
        Validators.required,
     ]],
    'PAN': [this.bidderform.PAN, [
      Validators.required,
      ]],
      'TraderLicense': [this.bidderform.TraderLicense, [
        Validators.required,
      ]],
     'Password': [this.bidderform.Password, [
    Validators.required,
      ]],
      'ConfirmPassword': [this.bidderform.ConfirmPassword, [
     Validators.required,
      ]],
  })
  }
  onSubmit(registerForm : BidderRegistrationForm){
    console.log(registerForm);
  
    this.service.addUser(registerForm).subscribe(data=>{
      console.log(data)
      window.location.reload();
      alert("User Registered Successfully");
      
    })
  }

}
