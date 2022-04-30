import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session19';
  showBlog :any = []
  lang:any = localStorage.getItem("currentLang")
  constructor(public translate : TranslateService , private global : GlobalService){

    if(!this.lang) localStorage.setItem("currentLang" , "en")
    this.translate.setDefaultLang(this.lang)

    
    this.global.blog().subscribe(res=>{
      console.log(res)
      this.showBlog= res.data
    })

  }
}
