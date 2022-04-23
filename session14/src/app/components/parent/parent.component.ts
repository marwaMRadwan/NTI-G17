import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userData :any=[]
  constructor() { }

  ngOnInit(): void {
  }
  handleUsers(event:any){
    console.log("------------------------")
    console.log(event)
    console.log("------------------------")
    this.userData.push(event)
  }

}
