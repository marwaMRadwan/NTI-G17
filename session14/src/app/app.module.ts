import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturesComponent } from './pages/features/features.component';
import { Home2Component } from './pages/home2/home2.component';
import { ErrorComponent } from './pages/error/error.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CardComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeaturesComponent,
    Home2Component,
    ErrorComponent,
    SinglepostComponent,
    GalleryComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
