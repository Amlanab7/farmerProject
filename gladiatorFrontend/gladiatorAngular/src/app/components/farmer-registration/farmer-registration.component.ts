import { Component, OnInit } from '@angular/core';
import{FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsertableService } from 'src/app/services/usertable.service';
@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  user : FormGroup
  farmerform:FarmerRegistrationForm=new FarmerRegistrationForm();
  constructor(private formBuilder:FormBuilder,private service:UsertableService) { }

  ngOnInit(): void {
    // this.registerForm =this.formBuilder.group({
        this.user= this.formBuilder.group({
        FullName: [this.farmerform.FullName, [
        Validators.required
        ]],
        'ContactNumber': [this.farmerform.ContactNumber, [
        Validators.required
        ]],
        'EmailId': [this.farmerform.EmailId, [
          Validators.required,
          Validators.email
       ]],
      'AddressLine1': [this.farmerform.AddressLine1, [
          Validators.required,
    ]],
        'AddressLine2': [this.farmerform.AddressLine2, [
          Validators.required,
     ]],
        'City': [this.farmerform.City, [
          Validators.required,
       ]],
       'State': [this.farmerform.State, [
        Validators.required,
      ]],
      'ResidencePincode': [this.farmerform.ResidencePincode, [
         Validators.required,
       ]],
      'Area': [this.farmerform.Area, [
         Validators.required,
      ]],
     'Address': [this.farmerform.Address, [
         Validators.required,
      ]],
       'LandPincode': [this.farmerform.LandPincode, [
       Validators.required,
       ]],
        'AccountNo': [this.farmerform.AccountNo, [
         Validators.required,
     ]],
        'IFSCcode': [this.farmerform.IFSCcode, [
          Validators.required,
      ]],
       'Aadhar': [this.farmerform.Aadhar, [
          Validators.required,
       ]],
      'PAN': [this.farmerform.PAN, [
        Validators.required,
        ]],
        'TraderLicense': [this.farmerform.TraderLicense, [
          Validators.required,
        ]],
       'Password': [this.farmerform.Password, [
      Validators.required,
        ]],
        'ConfirmPassword': [this.farmerform.ConfirmPassword, [
       Validators.required,
        ]],
    })
  
   
  }
  // onSubmit(registerForm : FarmerRegistrationForm){
  //   console.log(registerForm);
  
  //   this.service.addUser(registerForm).subscribe(data=>{
  //     console.log(data)
  //     window.location.reload();
  //     alert("User Registered Successfully");
      
  //   })
  // }
  onSubmit(farmerform : FarmerRegistrationForm){
    console.log(farmerform);
  
    this.service.addUser(farmerform).subscribe(data=>{
      console.log(data)
      window.location.reload();
      alert("User Added Successfully");
      
    })
    }
}
