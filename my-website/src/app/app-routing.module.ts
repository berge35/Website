import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import { InfoVizComponent } from './projects/info-viz/info-viz/info-viz.component';
import { MediaScrollerComponent } from './media-scroller/media-scroller.component';
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
    path: 'projects/info-viz',
    component: InfoVizComponent

  },
  {
    path: 'about-me',
    component: AboutComponent
  },
  {
    path: 'stest',
    component: MediaScrollerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
