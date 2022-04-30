import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public lang = (localStorage.getItem("currentLang") == "en" || localStorage.getItem("currentLang") == "null") ? 1 : 2
  constructor(private http : HttpClient) { }

  blog():Observable<any>{
    return this.http.get(`http://dashboard.roshetah.com/api/blog/${this.lang}/0/11`)
  }
}
