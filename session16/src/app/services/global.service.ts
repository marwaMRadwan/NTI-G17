import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public url = "http://techsexperts.site/api/"
  constructor(private http : HttpClient) { }
  login(obj:any):Observable<any>{
   return this.http.post(`${this.url}auth/Login` , obj)
  }
}
