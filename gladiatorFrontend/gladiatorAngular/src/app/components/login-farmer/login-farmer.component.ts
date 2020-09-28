import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginForm } from 'src/app/Models/LoginForm';
@Component({
  selector: 'app-login-farmer',
  templateUrl: './login-farmer.component.html',
  styleUrls: ['./login-farmer.component.css']
})
export class LoginFarmerComponent implements OnInit {
  myimage:string="assets/images/Homepagebgi.jpg";
  loginForm: LoginForm =new LoginForm();
  submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
verifyLogin(){

}
}
