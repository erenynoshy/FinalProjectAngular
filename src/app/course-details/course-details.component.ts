import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/Services/Course/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  MyCourse;
  MyCourseId;
  UserRole;
  constructor(private RouteCourseId:ActivatedRoute,private CourseService:CourseService) { }

  ngOnInit(): void {
    this.getCourse()

   this.UserRole= localStorage.getItem('role')
  }
  
  getCourse(){

    this.RouteCourseId.params.subscribe(params=>{
      this.MyCourseId=Number.parseInt(params["CourseId"])
      console.log("course id in details",this.MyCourseId)

    })

    this.CourseService.getCourseByCourseId(this.MyCourseId).subscribe(
      res=>{
        console.log("response in details",res);
        this.MyCourse=res;

      })
  }

}
