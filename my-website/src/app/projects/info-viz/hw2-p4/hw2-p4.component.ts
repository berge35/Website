import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-hw2-p4',
  templateUrl: './hw2-p4.component.html',
  styleUrls: ['./hw2-p4.component.css']
})
export class Hw2P4Component implements OnInit {
  options: any;
  data: any;
  options2: any;
  data2: any;
  options3: any;
  data3: any;


  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showLabels: true,
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        callback: function (chart) {
          console.log("!!! pieChart callback !!!");
        }
      }
    };

    this.options2 = {
      chart: {
        type: 'pieChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showLabels: false,
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        callback: function (chart) {
          console.log("!!! pieChart callback !!!");
        }
      }
    };

    this.options3 = {
      chart: {
        type: 'pieChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showLabels: false,
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        callback: function (chart) {
          console.log("!!! pieChart callback !!!");
        }
      }
    };

    this.data = this.getData();
    this.data2 = this.getData2();
    this.data3 = this.getData3();
  }

  getData() {
    var male = 0;
    var female = 0;
    var total = 0;
    var onGender: any[] = [];

    d3.csv("./../../assets/data/a1-grocerystoresurvey.csv", function (data) {
      data.forEach(function (d) {
        if(d.Gender == "Female")
          female++;
        else
          male++;
        total++
      });
      onGender.push({ label: "Male", value: male})
      onGender.push({ label: "Female", value: female})
    });

    return onGender;


  }

  getData2() {
    var incomes: number[] = [0,0,0,0,0,0,0,0,0,0,0];
    var myData: any[] = []
    d3.csv("./../../assets/data/a1-grocerystoresurvey.csv", function (data) {
      data.forEach(function (d) {
        incomes[Math.ceil(+d.Income / 10000)]++;
      });
      var index = 0;
      incomes.forEach((income) =>{
        myData.push({ label: "Income: " + (index * 10000).toString(), value: income })
        index++;
      })
    });
    return myData;


  }

  getData3() {
    var ages: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var myData: any[] = []
    d3.csv("./../../assets/data/a1-grocerystoresurvey.csv", function (data) {
      data.forEach(function (d) {
        ages[Math.ceil(+d.Age / 10)]++;
      });
      var index = 0;
      ages.forEach((income) => {
        myData.push({ label: "Age: " + (index * 10).toString(), value: income })
        index++;
      })
    });
    return myData;
  }


}
