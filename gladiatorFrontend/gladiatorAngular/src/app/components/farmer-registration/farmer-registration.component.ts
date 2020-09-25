import { Component, OnInit } from '@angular/core';
import{FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  user: FarmerRegistrationForm =new FarmerRegistrationForm();
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
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
             'Pincode': [this.user.Pincode, [
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
