import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{auctionRequest} from 'src/app/Model/auctionRequest'
import { SoldHistory } from '../Model/SoldHistory';
import { CropsforSale } from '../Model/CropsforSale';
import { BidRequest } from '../Model/Bidrequest';
import { Bids } from '../Model/bids';
import { AdminMarket } from '../Model/AdminMarket';
import { Observable } from 'rxjs';

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
  FarmerMarketCrops(UID){
    return this.http.get<CropsforSale[]>(this.baseURL+"/market/get/"+UID,this.httpOptions);
  }
  BidderMarket(){
      return this.http.get<CropsforSale[]>(this.baseURL+"/cropforsale");
  }
  AdminMarket(){
    return this.http.get<AdminMarket[]>(this.baseURL+"/adminmarket");
  }
  getAllCrops(){
    return this.http.get<auctionRequest[]>(this.baseURL+"/getall");
  }
  getAllBids(){
    return this.http.get<BidRequest[]>(this.baseURL+"/allbids");
  }
  accept(id){
    return this.http.put<auctionRequest>(this.baseURL+"/approval/"+id,this.httpOptions)
 }
 reject(id){
   return this.http.put<auctionRequest>(this.baseURL+"/rejection/"+id,this.httpOptions)
}
acceptbid(id){
  return this.http.put<BidRequest>(this.baseURL+"/bids/approval/"+id,this.httpOptions)
}
rejectbid(id){
 return this.http.put<BidRequest>(this.baseURL+"/bids/rejection/"+id,this.httpOptions)
}
soldByAdmin(id){
  return this.http.put<AdminMarket>(this.baseURL+"/sold/"+id,this.httpOptions)
}
getCropbyCID(CID){
  return this.http.get<CropsforSale>(this.baseURL+"/get/"+CID);
}//,bidamount,UID
//,[bidamount,UID]
  PlaceBidRequest(CID,bidamount,UID)
  {
    // alert(CID+bidamount+UID);
   return this.http.post<CropsforSale>(this.baseURL+"/bids/"+CID,[CID,bidamount,UID],this.httpOptions);
  }
  // public PreviousBids(CID,UID):Observable<Bids[]>{
  //   return this.http.get<Bids[]>(this.baseURL+"/previous/get/"+CID,UID);
  // }

}
