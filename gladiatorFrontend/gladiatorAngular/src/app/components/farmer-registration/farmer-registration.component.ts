import { Component, OnInit } from '@angular/core';
import{FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UsertableService } from 'src/app/services/usertable.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  user:FormGroup;
  constructor(private formBuilder:FormBuilder,private service:UsertableService,private router:Router,private http:HttpClient) { }
selectedFile:File=null;;
imageAPIurl="https://localhost:44331/api/Image/upload";
  ngOnInit(): void {
    // this.registerForm =this.formBuilder.group({
        this.user= this.formBuilder.group({
          'full_name': ['', [
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
      'land_area': ['', [
         Validators.required,
      ]],
     'land_address': ['', [
         Validators.required,
      ]],
       'land_pincode': ['', [
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

  onSelectedFile(event){
    if(event.target.files.length>0)
    {
      console.log(event);
      this.selectedFile=<File>event.target.files[0];
    
    }}
    onUpload(){
      const fd=new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
      this.http.post(this.imageAPIurl,fd)
      .subscribe(res=>console.log(res));
      
    }
    onSubmit() {
      this.service.addUser(this.user.value).subscribe(data=>{
        localStorage.setItem("userData",JSON.stringify(data));
        this.router.navigate(['/loginfarmer']);
        
      },(e)=>{
        console.log(e);
   
      })
      console.log(this.user.value);
      alert("User Added Successfully");
     }
    
     
}