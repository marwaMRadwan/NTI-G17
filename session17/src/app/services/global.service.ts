import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 public baseUrl = "http://dashboard.roshetah.com/api/"
 public isLogin = false

  constructor(private http : HttpClient) { }


  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}auth/login` , obj)
  }
}
