import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any=[]
  constructor( private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.images = this.route.snapshot.data['img']
    // this.global.gallery().subscribe(res=>{
    //   this.images = res
    // })
  }

}
