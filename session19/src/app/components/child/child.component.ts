import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() firstName : string = "ggggggg"
@Input() num : number = 0
  constructor() { 
    console.log("contstructor")
    console.log(this.firstName)
  }

  ngOnInit(): void {
    console.log("oninit")
    console.log(this.firstName)
  }
  ngOnChanges(e:Event){
    console.log(e)
    console.log("on change")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentInit(){
    console.log("after content init")
  }
  ngAfterContentChecked(){
    console.log("after content Check")
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  ngAfterViewChecked(){
    console.log("view checked")
  }
  ngOnDestroy(){
    console.log("on destroy")
    localStorage.removeItem("name")
  }



  handleLocal(){
    localStorage.setItem("name" , "nouran")
  }



}
