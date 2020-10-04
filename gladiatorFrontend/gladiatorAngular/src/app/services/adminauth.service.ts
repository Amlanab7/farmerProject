import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  gettoken(){
    return !!sessionStorage.getItem("sessionUser");
  }
}
