import { Component, OnInit } from '@angular/core';
import { MediaScrollerComponent } from '../media-scroller/media-scroller.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showCard: boolean = true; //show introduction card

  constructor() { }

  ngOnInit() {
  }

  //hide card and show media-scroller
  showScroller(){
    this.showCard = false;
  }

}
