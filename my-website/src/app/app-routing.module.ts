import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
    
  },
  {
    path: 'about-me',
    component: AboutComponent
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
