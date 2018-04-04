import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
   }

  ngOnInit() { }

}
