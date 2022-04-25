import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllImagesComponent } from './components/all-images/all-images.component';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"posts" , children:[
    {path:"" , component:PostsComponent},
    {path:":id" , component:SinglePostComponent},

  ]},
  {path:"images" , component:AllImagesComponent},
  {path:"register" , component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
