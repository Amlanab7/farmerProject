import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginForm } from 'src/app/Models/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myimage:string="assets/images/Homepagebgi.jpg";
  loginForm: LoginForm =new LoginForm();
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  verifyLogin(){

  }
}
