import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'https://localhost:44331/api/users/login';

  constructor(private http: HttpClient) { }

  doLogin(data) {
    console.log(data);
    return this.http.post(this.API_URI, data);
  }
}
