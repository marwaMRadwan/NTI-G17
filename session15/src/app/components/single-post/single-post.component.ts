import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  singlePost :any ={}
  constructor(private activated : ActivatedRoute ,  public global : GlobalService ) { }

  ngOnInit(): void {
    console.log(this.activated.snapshot.paramMap.get("id"))
    let id = this.activated.snapshot.paramMap.get("id")
    this.global.getSinglePost(id).subscribe(data=>{
      this.singlePost = data
    })

  }

}
