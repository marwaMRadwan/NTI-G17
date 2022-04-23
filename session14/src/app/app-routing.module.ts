import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { FeaturesComponent } from './pages/features/features.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';

const routes: Routes = [
  {path : 'home' , component:HomeComponent  },
  {path : '' , redirectTo:"home" , pathMatch:"full"  },

  {path : 'about' , component:AboutComponent},
  {path : 'contact' , component:ContactComponent},
  {path : 'features' , component:FeaturesComponent},
  // {path:'posts' , component:PostsComponent},
  // {path:'posts/:id' , component:SinglepostComponent},
  {path:"posts" , children:[
    {path:"" , component:PostsComponent},
    //posts
    {path : ":id" , component:SinglepostComponent},
    // posts/3
    {path:"singlePost" , component :SinglepostComponent}
    // posts/singlePost
  ]},
  {path:"gallery" , component:GalleryComponent},
  {path:"articles" , component:ArticleComponent},
  {path:"parent" , component:ParentComponent},
  {path:"**" , component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
