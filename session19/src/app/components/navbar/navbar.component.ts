import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  translateLang = localStorage.getItem("currentLang")
  constructor(public translate : TranslateService) { }

  ngOnInit(): void {
  }
  handleLang(){
    if(this.translateLang == "en"){
      this.translateLang="ar"
      localStorage.setItem("currentLang" , "ar")
      this.translate.use("ar")
      window.location.reload()
    }
    else{
      this.translateLang="en"
      localStorage.setItem("currentLang" , "en")
      this.translate.use("en")
      window.location.reload()
    }
  }

}
