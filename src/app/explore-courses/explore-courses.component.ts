import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  branches=[
    {name: "alex",
  },
    {name:"smart"}
    ];
   tracks=[  {name: "sd"},
   {name:"ui"}]
  
  
  }
  


