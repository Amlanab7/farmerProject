import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/Models/LoginForm';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-farmer',
  templateUrl: './login-farmer.component.html',
  styleUrls: ['./login-farmer.component.css']
})
export class LoginFarmerComponent implements OnInit {
  myimage:string="assets/images/Homepagebgi.jpg";
  loginForm:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder, private userService:AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});
   }

  ngOnInit(): void {
  }
  doLogin() {
    this.userService.doLogin(this.loginForm.value).subscribe(result => {
      console.log(result);
      localStorage.setItem('userData', JSON.stringify(result));
  
      this.router.navigate(['/farmer-welcome']);
      alert('Success');
    }, (error) => {
      console.log(error);
      alert("Unsuccessfull")
    });
    
  }
}
