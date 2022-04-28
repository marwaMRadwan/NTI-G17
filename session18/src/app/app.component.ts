import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session18';

  constructor(public global:GlobalService){
    let token = localStorage.getItem("token")
    if(token){
      // this.global.Auth().subscribe(res=>{
      //   console.log(res)
      //   this.global.isLogin= true
      //   this.global.userInfo=res
      // })
    
    }
  }
}
