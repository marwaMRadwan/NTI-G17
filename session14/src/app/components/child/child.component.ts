import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';



export interface formValue{
  userName:string
  email:string
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  model:formValue={
    userName:"",
    email:""
  }
  @Output() sendingData = new EventEmitter<formValue>() 

  constructor() { }

  ngOnInit(): void {
  }
  addUser(){
    const  newUser ={
      userName : this.model.userName,
      email : this.model.email
    }
    this.sendingData.emit(newUser)
  }


}
