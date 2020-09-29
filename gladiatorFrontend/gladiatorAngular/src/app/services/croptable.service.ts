import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{auctionRequest} from 'src/app/Model/auctionRequest'
import { SoldHistory } from '../Model/SoldHistory';
import { CropsforSale } from '../Model/CropsforSale';
import { BidRequest } from '../Model/Bidrequest';

@Injectable({
  providedIn: 'root'
})
export class CroptableService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  constructor(private http:HttpClient) { }
  baseURL:string="https://localhost:44331/api/crops"

  addAuctionRequest(id,auctionrequest){
    return this.http.post<auctionRequest>(this.baseURL+"\\"+id,JSON.stringify(auctionrequest),this.httpOptions);
  }
  soldHistory(id){
    return this.http.get<SoldHistory[]>(this.baseURL+"/soldhistory/"+id,this.httpOptions);
  }
  BidderMarket(){
      return this.http.get<CropsforSale[]>(this.baseURL+"/cropforsale");
  }
  getAllCrops(){
    return this.http.get<auctionRequest[]>(this.baseURL+"/getall");
  }
  accept(id){
    return this.http.put<auctionRequest>(this.baseURL+"/approval/"+id,this.httpOptions)
 }
 reject(id){
   return this.http.put<auctionRequest>(this.baseURL+"/rejection/"+id,this.httpOptions)
}
getCropbyCID(CID){
  return this.http.get<CropsforSale>(this.baseURL+"\\"+CID);
}
  PlaceBidRequest(CID,bidamount,UID)
  {
   return this.http.post<CropsforSale>(this.baseURL+"/bids/"+CID,[bidamount,UID],this.httpOptions);
  }
}
