import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ResolveService } from './services/resolve.service';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login" , component:LoginComponent , canActivate:[CanActivateGuard] , canDeactivate:[CanDeactivateGuard]},
  {path: "posts" ,
  canActivateChild:[CanActivateChildGuard],
   children:[
    {path:"" , component:PostsComponent},
    {path:"single-post" , component:SinglePostComponent}
  ]},
  {path:"gallery" , component:GalleryComponent , resolve : {img : ResolveService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
