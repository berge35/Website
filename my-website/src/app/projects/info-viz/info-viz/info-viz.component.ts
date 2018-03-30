import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-info-viz',
  templateUrl: './info-viz.component.html',
  styleUrls: ['./info-viz.component.css']
})
export class InfoVizComponent implements OnInit {
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
      type: 'lineChart',
        height: 450,
          margin : {
        top: 20,
          right: 20,
            bottom: 40,
              left: 55
      },
      interpolate: "monotone",
      x: function(d) { return d.x; },
      y: function(d) { return d.y; },
      useInteractiveGuideline: true,
        dispatch: {
        stateChange: function(e) { console.log("stateChange"); },
        changeState: function(e) { console.log("changeState"); },
        tooltipShow: function(e) { console.log("tooltipShow"); },
        tooltipHide: function(e) { console.log("tooltipHide"); }
      },
      xAxis: {
        axisLabel: 'Year'
      },
      yAxis: {
        axisLabel: 'Unit',
          tickFormat: function(d) {
            return d3.format('.03f')(d);
          },
        axisLabelDistance: -3
      },
      callback: function(chart) {
        console.log("!!! lineChart callback !!!");
      }
    },
    title: {
      enable: true,
        text: 'Title for Line Chart'
    },
    subtitle: {
      enable: true,
        text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
          css: {
        'text-align': 'center',
          'margin': '10px 13px 0px 7px'
      }
    },
    caption: {
      enable: true,
        html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
          css: {
        'text-align': 'justify',
          'margin': '10px 13px 0px 7px'
      }
    }
  };

  this.data = this.getData();
  //this.data = this.sinAndCos();
  }

  getData(){
    var mydata: any[] = [];
    var MPG: any[] = [];
    var avgMPG: any[] = [];
    var Cyl: any[] = [];
    var Hp: any[] = [];
    var minYear: number = 100;
    var maxYear: number = 0;
    var years: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    var entries: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var cylyears: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var cylentries: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var avgCyl: any[] = [];
    var hpyears: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var hpentries: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var avgHp: any[] = [];
    d3.csv("./../../assets/data/a1-cars.csv", function (data) {
      data.forEach(function (d) {
        if(+d.Cylinders)
          Cyl.push({ x: +d.Model_Year, y: +d.Cylinders});
        if(+d.Horsepower)
          Hp.push({ x: d.Model_Year, y: +d.Horsepower });
        else
          Hp.push({ x: d.Model_Year, y: 120 })
        if(+d.MPG)
          MPG.push({ x: d.Model_Year, y: +d.MPG });
        else
          MPG.push({ x: d.Model_Year, y: 14});



      });
      
      
      //console.log(arr);
      //calculate the average MPG per year mark

      MPG.forEach((entry) => {
        var year = entry.x;
        var index = 82 - year;
        years[index] = years[index] + entry.y
        entries[index] = entries[index] + 1;
      })
      var i = 0;
      years.sort(function(a,b){
        return a-b;
      })
      years.forEach((entry) => {
        avgMPG.push({x: i + 70, y: Math.ceil(entry / entries[i])});
        i++;
      })

      Cyl.forEach((entry) => {
          var year = entry.x;
          var index = 82 - year;
          cylyears[index] = cylyears[index] + entry.y
          cylentries[index] = cylentries[index] + 1;
      })
      i = 0;
      cylyears.sort(function (a, b) {
        return a + b;
      })
      cylyears.forEach((entry) => {
        avgCyl.push({ x: i + 70, y: Math.ceil( entry / cylentries[i]) });
        i++;
      })

      Hp.forEach((entry) => {
        var year = entry.x;
        var index = 82 - year;
        hpyears[index] = hpyears[index] + entry.y
        hpentries[index] = hpentries[index] + 1;
      })
      i = 0;
      hpyears.sort(function (a, b) {
        return a + b;
      })
      hpyears.forEach((entry) => {
        avgHp.push({ x: i + 70, y: Math.ceil(entry / hpentries[i]) });
        i++;
      }

    )
    });
    

    
    return [
      {
        values: avgMPG,      //values - represents the array of {x,y} data points
        key: 'Miles Per Gallon', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values: avgCyl,      //values - represents the array of {x,y} data points
        key: 'Cylinders', //key  - the name of the series.
        color: '#2ca02c'  //color - optional: choose your own line color.
      },
      {
        values: avgHp,      //values - represents the array of {x,y} data points
        key: 'HP', //key  - the name of the series.
        color: '#7777ff'  //color - optional: choose your own line color.
      },
    ];
    
    
  }

  sinAndCos() {
    var sin = [], sin2 = [],
      cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      sin.push({ x: i, y: Math.sin(i / 10) });
      sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
      cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
    }

    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin,      //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      },
      {
        values: sin2,
        key: 'Another sine wave',
        color: '#7777ff',
        area: true      //area - set to true if you want this line to turn into a filled area chart.
      }
    ];
  };
}
