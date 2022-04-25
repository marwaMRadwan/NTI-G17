import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public appName = "angular app test"
  public apiUrl = "http://techsexperts.site/api/"
  constructor(private http : HttpClient ) { }

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  }
  getSinglePost(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  getPhotos():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos?_limit=4000")
  }
  register(obj:any):Observable<any>{
    return this.http.post(`${this.apiUrl}auth/Register` , obj)
  }
}
