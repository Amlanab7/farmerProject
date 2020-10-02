import { Component, OnInit } from '@angular/core';
import { Forgot } from 'src/app/Models/Forgot';
import { UsertableService } from 'src/app/services/usertable.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  name: string;
  email: string;
  Credential:Forgot=new Forgot();
  constructor(private service:UsertableService) { }

  ngOnInit(): void {
  }
  submitForm() {
    this.Credential.email=this.email;
    this.service.forgotpassword(this.Credential).subscribe(
      (error) => {
        console.log(error)})
        alert("Your account Password is sent to your register email"
        
    );

    
  }
}
