import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MarketsComponent } from './components/markets/markets.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path : 'markets' , component:MarketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
