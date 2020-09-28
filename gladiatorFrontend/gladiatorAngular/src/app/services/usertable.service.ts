import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm'
@Injectable({
  providedIn: 'root'
})
export class UsertableService {
  baseURL:string="https://localhost:44331/api/users"

  constructor(private http:HttpClient) { }
  getAllUser(){
    return this.http.get<FarmerRegistrationForm[]>(this.baseURL);
  }
  addUser(user){
    return this.http.post<FarmerRegistrationForm>(this.baseURL+"/create",user);
  }
  
}
