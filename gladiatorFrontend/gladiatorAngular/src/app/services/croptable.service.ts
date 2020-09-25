import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{auctionRequest} from 'src/app/Model/auctionRequest'

@Injectable({
  providedIn: 'root'
})
export class CroptableService {

  constructor(private http:HttpClient) { }
  baseURL:string=""

  addAuctionRequest(auctionrequest){
    return this.http.post<auctionRequest>(this.baseURL,JSON.stringify(auctionrequest));
  }
}
