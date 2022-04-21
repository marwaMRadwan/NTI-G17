import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fName : string = "nouran"
  lName : any = "ahmed"
  val :any = ""
  num:number = 0
  inputPlaceholder = "enter your Name"
  inputType="text"
  className = "border"
  value="password"
  inputModel ="nouran"
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(){
    return `${this.fName} ${this.lName}`
  }

  minValue(num1 :number , num2:number){
    return Math.min(num1 , num2)
  }

  handleInput(e:any , inputValue :any){
    console.log(e.target.value)
    console.log(inputValue.value)
    this.val = inputValue.value
  }
  handleIncrement(){
    this.num++
  }
  handleDecrement(){
    this.num--
  }

  handleEnter(){
    console.log("enter")
  }

  handlePassword(){
    this.value = "text"
  }


}
