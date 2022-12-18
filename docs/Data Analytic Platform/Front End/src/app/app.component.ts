import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Chart } from 'angular-highcharts';
import { DateTime } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Submission Date Vs Grades';
  dataset: any = {};
  submissionDates: any = [];
  grades: any = [];
  highchart : any
  
  constructor(private s: ServicesService) { }

  ngOnInit(): void {
      this.s.getData().subscribe((res) =>{
      console.log('Result:', res.data);
      this.dataset = res.data;
      for( var i= 0; i < Object.keys(this.dataset).length; i++ ){
        if(this.dataset[i].submssion_date <= this.dataset[i].due_date){
        this.submissionDates.push(this.dataset[i].id);}
        this.grades.push(this.dataset[i].grade);
      }
       
    this.highchart = new Chart({
      chart: {
        type: 'scatter'
      },
      title: {
        text: 'Due date Vs Grades'
      },
        credits: {
        enabled: false
      },
      xAxis: {
        min: 0,
        max: 10
      },
      yAxis : {
        min: 50,
        max: 100
      },
      series: [
        
        {
        type:'line',  
        name: 'Grades',
        data: this.grades
        },
        {
          type : 'scatter',
          name: 'Submissions Before Due Date',
         data: this.grades,
         marker: {
            radius: 4
         }
  
        }
      ]
      });
  });  

 
  
    
  }
}
 