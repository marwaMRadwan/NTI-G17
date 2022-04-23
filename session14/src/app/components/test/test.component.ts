import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  flag = true
  num= 3
  d = new Date().getMonth()

  numArr: any[]=[
    {key : 1 , value : "one"},
    {key : 2 , value : "two"},
    {key : 3 , value : "three"},
  ]

  month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  constructor() { }

  ngOnInit(): void {
  }

}
