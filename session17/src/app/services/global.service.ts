import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 public baseUrl = "http://dashboard.roshetah.com/api/"
 public imgUrl = "http://dashboard.roshetah.com/storage/app/public/"
 public isLogin = false
 public navbarFlag = true

  constructor(private http : HttpClient) { }


  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}auth/login` , obj)
  }
  loadRoles():Observable<any>{
    return this.http.get(`${this.baseUrl}auth/loadRoles/1`)
  }
  getProvidersBySlug(obj:any , pageNum:any):Observable<any>{
    return this.http.post(`${this.baseUrl}auth/LoadProvidersBySlug/1/${pageNum}/10` , obj)
  }
}
