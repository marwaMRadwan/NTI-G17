import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData= new FormGroup({
    phone : new FormControl('' , [Validators.required , Validators.minLength(11)]), // validators.email , validator.patter()
    password : new FormControl('' , [Validators.required , Validators.maxLength(10) , Validators.minLength(5)])
  })
  isSubmitted = false
  constructor(private global : GlobalService) { }

  ngOnInit(): void {
  }
  get phone(){return this.userData.get('phone')}
  get password(){return this.userData.get('password')}
  handleSubmit(){
    this.isSubmitted =true
    console.log(this.userData)
    if(this.userData.valid){
      this.global.login(this.userData.value).subscribe(res=>{
        console.log(res)
      })
    }
  }

}
