import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginForm } from 'src/app/Models/LoginForm';
@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {
  myimage:string="assets/images/Homepagebgi.jpg";
  loginForm: LoginForm =new LoginForm();
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  verifyLogin(){

  }
}
