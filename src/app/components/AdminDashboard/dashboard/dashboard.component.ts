import { Component, OnInit } from '@angular/core';
// For MDB Angular Pro
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {Router} from '@angular/router';
import {AdminService} from '../../../../Services/Admin/admin.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
///////////////////////////////////services part ///////////////////////
constructor(private router:Router,private admin:AdminService) { }

  ngOnInit() {

    this.getallbranches();
    this.getallcourses();
    this.getallinstructors();
    this.getalltracks();
    this.getallprojects();
  }
  //variable to carru data 
  branches;
  tracks;
  instructors;
  courses;
  Projects;
//get all branches
 getallbranches()
{
  console.log("all branches")
  this.admin.GetAllBranches().subscribe(
    res=>{
      console.log("in response")
      console.log(res)
     this.branches=res;
      }
      ,
      err=>{
        console.log("in error")
        console.log(err)
      }
  )
}
//get all tracks
getalltracks()
{
 
  this.admin.GetAllTracks().subscribe(
    res=>{
      console.log("in response")
      console.log(res)
     this.tracks=res;
      }
      ,
      err=>{
        console.log("in error")
        console.log(err)
      }
  )
}
//get all instructors
getallinstructors()
{
  this.admin.GetAllInstructors().subscribe(
    res=>{
      console.log("in response")
      console.log(res)
     this.instructors=res;
      }
      ,
      err=>{
        console.log("in error")
        console.log(err)
      }
  )
}
//get all projects
getallprojects()
{
  this.admin.GetAllprojects().subscribe(
    res=>{
      console.log("in response project")
      console.log(res)

  this.Projects=res;
      }
      ,
      err=>{
        console.log("in error project")
        console.log(err)
      }
  )
}
//get all coursess
getallcourses()
{
  this.admin.GetAllCourses().subscribe(
    res=>{
      console.log("in response couses")
      console.log(res)
     this.courses=res;
      }
      ,
      err=>{
        console.log("in error courses")
        console.log(err)
      }
  )
}
  //////////////////////////////bie chart /////////////////////////////////
   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Smart', 'Tracks'], ['Naser', 'City', 'Tracks'], 'Ismailia Tracks'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  // events
  public chartClickedpie({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHoveredpie({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
///////////////////////bar chart ///////////////////////////////////////////////
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Ismaila', 'Smart', 'Naser', 'Mansora', 'Aswan', 'Alex', 'monofia'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tracks' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Courses' }
  ];

  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
