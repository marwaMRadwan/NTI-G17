import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token = localStorage.getItem("token")
  constructor(public global : GlobalService) { 
  (this.token) ? this.global.isLogin = true : this.global.isLogin = false
  }

  ngOnInit(): void {
  }

}
