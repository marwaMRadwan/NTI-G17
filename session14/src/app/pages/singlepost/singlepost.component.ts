import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  postId:any
  constructor(private _activated : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._activated.snapshot.paramMap.get('id'))
    console.log(this._activated.snapshot.params['id'])
    this._activated.paramMap.subscribe(data=>{
      console.log(data)
      this.postId = data.get('id')
      console.log(`post id = ${this.postId}`)
      if(this.postId == 10) console.log("lorem ")
    })
  }

}
