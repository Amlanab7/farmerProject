import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FarmerauthService } from '../services/farmerauth.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerauthGuard implements CanActivate {
  constructor(private authfarmerservice: FarmerauthService, private router: Router) {}  
  canActivate(): boolean {  
      if (!this.authfarmerservice.gettoken()) {  
          this.router.navigateByUrl("/loginfarmer");  
      }  
      return this.authfarmerservice.gettoken();  
  }
  
}
