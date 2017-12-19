import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './misc/resume.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';

// More specific first to more general
const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'resume', component: ResumeComponent},
  {path:'playground', component: PlaygroundComponent},
  {path:'user', component: UserComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
