import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MarketsComponent } from './components/markets/markets.component';
import { UserInterceptor } from './interceptor/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : UserInterceptor  ,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
