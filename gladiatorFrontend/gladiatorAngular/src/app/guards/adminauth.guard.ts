import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthService } from '../services/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {
  constructor(private authadminservice: AdminauthService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.authadminservice.gettoken()) {  
        this.router.navigateByUrl("/loginadmin");  
    }  
    return this.authadminservice.gettoken();  
}
  
}
