import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name = "nouran"
  num = 3
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.name = "marwa"
    this.num = 10
  }

}
