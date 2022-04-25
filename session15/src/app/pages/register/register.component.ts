import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={}
  msg=""
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
  }

  handleRegister(register:NgForm , firstName:any){
    if(register.valid){
      this.global.register(this.model).subscribe(resp=>{
        console.log(resp)
        if(resp.errors){
          this.msg = resp.errors.telephone[0]
        }
      })
    }
    console.log(register)
    console.log(firstName)
    console.log(this.model)
  }

}
