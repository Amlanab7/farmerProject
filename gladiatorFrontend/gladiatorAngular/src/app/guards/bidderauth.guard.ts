import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BidderauthService } from '../services/bidderauth.service';

@Injectable({
  providedIn: 'root'
})
export class BidderauthGuard implements CanActivate {
  constructor(private authbidderservice: BidderauthService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.authbidderservice.gettoken()) {  
        this.router.navigateByUrl("/loginbidder");  
    }  
    return this.authbidderservice.gettoken();  
}
  
}
