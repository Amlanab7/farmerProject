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
    this.userService.doLoginFarmer(this.loginForm.value).subscribe(result => {
      console.log(result);
       localStorage.setItem('userData', JSON.stringify(result));
       sessionStorage.setItem('sessionUser',JSON.stringify(result));
      // var user = JSON.parse(localStorage.getItem('userData'));
      // alert(user.UID);
      this.router.navigate(['/farmer-welcome']).then(()=>{
        window.location.reload();
      });
      alert('Success');
    }, (error) => {
      console.log(error);
      alert("Unsuccessfull")
    });
    this.router.navigate(['loginfarmer']);
    
    
  }
}
