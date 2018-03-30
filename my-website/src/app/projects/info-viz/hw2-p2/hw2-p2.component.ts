import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hw2-p2',
  templateUrl: './hw2-p2.component.html',
  styleUrls: ['./hw2-p2.component.css']
})
export class Hw2P2Component implements OnInit {

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
        type: 'multiBarHorizontalChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        interpolate: "monotone",
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: 'Manufacturer'
        },
        yAxis: {
          axisLabel: 'Calories',
          tickFormat: function (d) {
            return d3.format('.03f')(d);
          },
          axisLabelDistance: -13
        },
        callback: function (chart) {
          console.log("!!! barChart callback !!!");
        }
      }
    };

    this.data = this.getData();
    //this.data = this.sinAndCos();
  }

  getData() {
    var Manufactures: any[] = [];
    var Cereals: any[] = [];
    var perMan: any[] = [];
    d3.csv("./../../assets/data/a1-cereals.csv", function (data) {
      data.forEach(function (d) {
        var man = d.Manufacturer;
        if(!Manufactures.find((i) =>{return i == man})){
          Manufactures.push(man);
        }
        Cereals.push({value: +d.Calories, label: man});

      });
      perMan.fill(0)
      Manufactures.forEach((man)=>{
        var sum = 0;
        var count = 0;
        Cereals.forEach((cereal)=>{
          if(cereal.label == man){
            sum += cereal.value;
            count++;
          }
        })
        var avg = sum / count;
        perMan.push({value: avg, label: man});
      })
    });


    return [
      {
        values: perMan,      //values - represents the array of {x,y} data points
        key: 'Calories', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      }
    ];


  }

}



