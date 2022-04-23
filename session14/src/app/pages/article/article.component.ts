import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  parent = "parent component"
  articles : any[]=[
    {articleName : "article 1" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "article 2" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "article 3" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "article 4" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
  ]
  products : any[]=[
    {articleName : "product 1" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "product 2" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "product 3" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
    {articleName : "product 4" , articleValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum."},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
