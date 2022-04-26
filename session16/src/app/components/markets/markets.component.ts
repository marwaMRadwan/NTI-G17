import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.allMarket().subscribe(res=>{
      console.log(res)
    })
  }

}
