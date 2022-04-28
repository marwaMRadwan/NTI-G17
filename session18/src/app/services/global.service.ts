import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public url = "http://techsexperts.site"
  public isLogin = false
  public userInfo :any= {}
  constructor(private http: HttpClient) { }

  login(obj: any): Observable<any> {
    return this.http.post(`${this.url}/api/auth/Login`, obj)
  }
  Auth() {
    this.http.post(`${this.url}/api/auth/me`, null).subscribe(data=>{
      this.userInfo = data
    })
    return this.userInfo
    
  }
  gallery():Observable<any>{
   return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
