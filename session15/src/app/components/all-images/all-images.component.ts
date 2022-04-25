import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {
  isLoaded = false
  constructor(public global :GlobalService) { }
  showImages :any = []
  ngOnInit(): void {
    this.global.getPhotos().subscribe(img=>{
      this.showImages = img
    } , (err)=>{
      console.log(err)
    } , ()=>{
      this.isLoaded = true
    })
  }

}
