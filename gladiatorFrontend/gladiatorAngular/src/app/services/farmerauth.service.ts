import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerauthService {

  constructor() { }
  gettoken(){
    return !!sessionStorage.getItem("sessionUser");
  }
}
