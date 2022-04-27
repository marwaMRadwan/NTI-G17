import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email : new FormControl("nouran@hotmail.com" , [Validators.required]) ,
    password:new FormControl("" , [Validators.required])
  })
  token = localStorage.getItem('token')
  constructor(private global:GlobalService , private router:Router) { 
   if (this.token) this.router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log(this.login.value)
    if(this.login.valid){
      this.global.login(this.login.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem("token" ,`bearer ${res.access_token}`)
        this.global.isLogin = true
        this.router.navigateByUrl("/")
      })

    }
  }

}
