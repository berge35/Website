import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-hw2-p5',
  templateUrl: './hw2-p5.component.html',
  styleUrls: ['./hw2-p5.component.css']
})
export class Hw2P5Component implements OnInit {
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
        type: 'stackedAreaChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        showLabel: false,
        clipEdge: true,
        rightAlignAxis: true,
        showLegend: false,
        x: function (d) { return d[0]; },
        y: function (d) { return d[1]; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: 'Years'
        },
        yAxis: {
          axisLabel: 'Price',

          axisLabelDistance: -3
        },
        callback: function (chart) {
          console.log("!!! stackedAreaChart callback !!!");
        }
      }
    };
    this.data = this.getData();

  }

  getData() {
    var myData: any[] = [];

    d3.csv("./../../assets/data/a1-mutualfunds.csv", function (data) {
      data.forEach(function (d) {
        if (d.Symbol != "" && +d.YR1 != 0 && +d.YR3 != 0 && +d.YR5 != 0 && +d.YR10 != 0){
          myData.push({key: d.Symbol, values: 
          [
              [1, +d.YR1], [3, +d.YR3], [5, +d.YR5], [10, +d.YR10]
          ]
          })
        }
      });

    });
    //console.log(myData)
    return myData;


  }

}
