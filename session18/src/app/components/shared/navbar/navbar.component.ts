import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data : any = {}
  constructor(public global : GlobalService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if(token){
      // this.global.Auth().subscribe(res=>{
      //   console.log(res)
      //   this.global.isLogin= true
      //   this.data=res
      //   localStorage.setItem("userInfo" ,JSON.stringify(res) )
      // })

    
  }
  // console.log(localStorage.getItem("userInfo"))
  // this.global.Auth()
  // console.log(this.global.userInfo)
  }
}
