import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted= false
  data = new FormGroup({
    phone:new FormControl("01088888881" , [Validators.required]),
    password:new FormControl("123456" , [Validators.required]),
  })
  constructor(private global : GlobalService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.isSubmitted = true
    if(this.data.valid){
      this.global.login(this.data.value).subscribe(res=>{
        console.log(res)
        this.global.isLogin = true
        localStorage.setItem("token" , `bearer ${res.access_token}`)
      })
    }
  }
  canExit():boolean{
    if(this.isSubmitted == false && this.data.dirty == false){
      alert("please save changes")
      return true
    }
    else{
      return false
    }
  }

}
