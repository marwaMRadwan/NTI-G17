import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private router:Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      let token = localStorage.getItem("token")
      if(!token){
        this.router.navigateByUrl("/")
        return false
      }
    return true;
  }
  
}
