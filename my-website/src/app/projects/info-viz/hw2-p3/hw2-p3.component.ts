import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-hw2-p3',
  templateUrl: './hw2-p3.component.html',
  styleUrls: ['./hw2-p3.component.css']
})
export class Hw2P3Component implements OnInit {
  options: any;
  data: any;


  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'scatterChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        x: function (d) { return d.x; },
        y: function (d) { return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: 'Year'
        },
        yAxis: {
          axisLabel: 'Length',
          tickFormat: function (d) {
            return d3.format('.03f')(d);
          },
          axisLabelDistance: 0
        },
        callback: function (chart) {
          console.log("!!! scatterPlot callback !!!");
        }
      }
    };

    this.data = this.getData();
    //this.data = this.sinAndCos();
  }

  getData() {
    var hasAward: any[] = []
    var noAward: any[] = []

    d3.csv("./../../assets/data/a1-film.csv", function (data) {
      data.forEach(function (d) {
        if (d.Awards == "Yes")
          hasAward.push({x: +d.Year, y: +d.Length, size: -d.Popularity})
        else
          noAward.push({ x: +d.Year, y: +d.Length, size: -d.Popularity })
      });
      
    });
      // myData[i].values.push({
      //     x: random()
      //   , y: random()
      //   , size: Math.random()   //Configure the size of each scatter point
      // });
    return[
      {
        values: hasAward,      //values - represents the array of {x,y} data points
        key: 'Has Award', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values: noAward,      //values - represents the array of {x,y} data points
        key: 'No Award', //key  - the name of the series.
        color: '#0000ff'  //color - optional: choose your own line color.
      }
      
    ];


  }

}
