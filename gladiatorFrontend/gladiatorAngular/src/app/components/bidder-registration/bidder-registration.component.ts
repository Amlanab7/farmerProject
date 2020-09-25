import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { BidderRegistrationForm } from 'src/app/Models/BidderRegistrationForm';
@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {
  user:BidderRegistrationForm=new BidderRegistrationForm();
  registerForm:FormGroup;
  hide = true;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm =this.formBuilder.group({
      'FullName': [this.user.FullName, [
             Validators.required
             ]],
             'ContactNumber': [this.user.ContactNumber, [
               Validators.required
             ]],
             'EmailId': [this.user.EmailId, [
               Validators.required,
               Validators.email
            ]],
            'AddressLine1': [this.user.AddressLine1, [
               Validators.required,
            ]],
             'AddressLine2': [this.user.AddressLine2, [
               Validators.required,
             ]],
             'City': [this.user.City, [
               Validators.required,
             ]],
             'State': [this.user.State, [
              Validators.required,
            ]],
             'ResidencePincode': [this.user.ResidencePincode, [
              Validators.required,
            ]],
           
             'AccountNo': [this.user.AccountNo, [
              Validators.required,
          ]],
             'IFSCcode': [this.user.IFSCcode, [
               Validators.required,
           ]],
            'Aadhar': [this.user.Aadhar, [
               Validators.required,
             ]],
             'PAN': [this.user.PAN, [
               Validators.required,
             ]],
             'TraderLicense': [this.user.TraderLicense, [
               Validators.required,
             ]],
             'Password': [this.user.Password, [
             Validators.required,
             ]],
             'ConfrimPassword': [this.user.ConfirmPassword, [
               Validators.required,
             ]],
      
    })

   
  }

}
