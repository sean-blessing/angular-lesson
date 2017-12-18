import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// More specific first to more general
const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
