import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';

import { MaterializeDirective } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { InfoVizComponent } from './projects/info-viz/info-viz/info-viz.component';
import 'd3';
import 'nvd3';
import 'd3-dsv';
import { NvD3Module } from "ng2-nvd3";
import { Hw2P2Component } from './projects/info-viz/hw2-p2/hw2-p2.component';
import { Hw2P3Component } from './projects/info-viz/hw2-p3/hw2-p3.component';
import { Hw2P4Component } from './projects/info-viz/hw2-p4/hw2-p4.component';
import { Hw2P5Component } from './projects/info-viz/hw2-p5/hw2-p5.component';
import { MediaScrollerComponent } from './media-scroller/media-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProjectsComponent,
    AboutComponent,
    InfoVizComponent,
    Hw2P2Component,
    Hw2P3Component,
    Hw2P4Component,
    Hw2P5Component,
    MediaScrollerComponent,
    MaterializeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvD3Module,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
