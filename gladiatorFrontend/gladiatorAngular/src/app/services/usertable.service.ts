import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {FarmerRegistrationForm} from 'src/app/Models/FarmerRegistrationForm'
import { AdminUserApprovalForm } from '../Models/AdminUserapprovalforms';
import { UserType } from '../Models/UserType';
import { LoginForm } from '../Models/LoginForm';
import { Forgot } from '../Models/Forgot';
import { ImageClass } from '../Models/Image';
@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  baseURL:string="https://localhost:44331/api/users"
  imageURL:string="https://localhost:44331/api/Image"

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
  getUserbyUID(UID){
    return this.http.get<FarmerRegistrationForm>(this.baseURL+"/get/"+UID);
  }
  accept(id){
     return this.http.put<FarmerRegistrationForm>(this.baseURL+"/approval/"+id,this.httpOptions)
  }
  reject(id){
    return this.http.put<FarmerRegistrationForm>(this.baseURL+"/rejection/"+id,this.httpOptions)
 }
usertype(typedata:UserType){

return this.http.put<UserType>(this.baseURL+"/type/"+typedata.UID,typedata,this.httpOptions);
}
forgotpassword(email:Forgot)
{
 return this.http.post<LoginForm>(this.baseURL+"/forgot",email,this.httpOptions);
}
caption(image:ImageClass){
  return this.http.put<ImageClass>(this.imageURL+"/caption/"+image.UID,image,this.httpOptions)
}
getPan(UID){
  return this.http.get<ImageClass>(this.baseURL+"/pan/"+UID);
}
getAadhar(UID){
  return this.http.get<ImageClass>(this.baseURL+"/Aadhar/"+UID);
}
}
