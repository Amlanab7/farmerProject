import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/Models/LoginForm';
import { AuthService } from 'src/app/services/auth.service';
import { UsertableService } from 'src/app/services/usertable.service';
@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {
  myimage:string="assets/images/Homepagebgi.jpg";
  loginForm:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder,private userService :AuthService,private router:Router) { 
    this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
  })
}

  ngOnInit(): void {
  }

  doLogin(){
    this.userService.doLoginBidder(this.loginForm.value).subscribe(result => {
      console.log(result);
      localStorage.setItem('userData', JSON.stringify(result));
      // var user = JSON.parse(localStorage.getItem('userData'));
      // alert(user.UID);
      this.router.navigate(['/bidder-welcome']).then(()=>{window.location.reload()});
      alert('Success');
    }, (error) => {
      console.log(error);
      alert("Unsuccessfull")
    });
    this.router.navigate(['loginbidder']);
  }
}
