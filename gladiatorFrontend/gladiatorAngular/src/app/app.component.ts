import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerRegistrationComponent } from './components/farmer-registration/farmer-registration.component';
import { FarmerRegistrationForm } from './Models/FarmerRegistrationForm';
import { LoginForm } from './Models/LoginForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FarmerPortal';
 loggedInUser:FarmerRegistrationForm=null;

  ngOnInit(): void {
    
    var user=JSON.parse(localStorage.getItem('userData'));
    this.loggedInUser=user;
    

}

constructor(private router: Router){}

  logout()
  {
   localStorage.removeItem("userData");
   sessionStorage.removeItem("sessionUser");
   this.router.navigate([""]);
   window.location.reload();
  }
}
