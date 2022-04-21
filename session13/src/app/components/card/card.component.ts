import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  className = "text-danger"
  className2 = "bg-light"
  btnFlag:boolean = false
  inputFontSize = '30px'

 
  constructor() { }

  ngOnInit(): void {
  }

}
