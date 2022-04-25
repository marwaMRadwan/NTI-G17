import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any=[]
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
   console.log( this._global.getPosts())
    this._global.getPosts().subscribe(data=>{
      this.posts = data 
      console.log(this.posts)
    })
  }

}
