import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm'
import { AdminUserApprovalForm } from '../Models/AdminUserapprovalforms';
import { UserType } from '../Models/UserType';
@Injectable({
  providedIn: 'root'
})
export class UsertableService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  baseURL:string="https://localhost:44331/api/users"

  constructor(private http:HttpClient) { }
  getAllUser(){
    return this.http.get<FarmerRegistrationForm[]>(this.baseURL);
  }
  addUser(user){
    return this.http.post<FarmerRegistrationForm>(this.baseURL+"/create",user);
  }
  getAllUsers(){
    return this.http.get<AdminUserApprovalForm[]>(this.baseURL+"/getall");
  }
  accept(id){
     return this.http.put<AdminUserApprovalForm>(this.baseURL+"/approval/"+id,this.httpOptions)
  }
  reject(id){
    return this.http.put<AdminUserApprovalForm>(this.baseURL+"/rejection/"+id,this.httpOptions)
 }
usertype(typedata:UserType){

return this.http.put<UserType>(this.baseURL+"/type/"+typedata.UID,typedata,this.httpOptions);
}
  
}
