import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/Services/Course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-key',
  templateUrl: './enroll-key.component.html',
  styleUrls: ['./enroll-key.component.css']
})
export class EnrollKeyComponent implements OnInit {

   CourseId;
   
   
   
   constructor( private courseservice:CourseService, private router:Router) { }
   
   ngOnInit(): void {
  }
  // EnrollmentKey=""
  // OnEnroll(){
  //   if(this.EnrollmentKey==="")
  //   return 

  //   this.courseservice.EnrollInCourse(this.CourseId,this.EnrollmentKey).subscribe(
  //     res=>{
  //       console.log(res,"respone of enroolment")
  //       if(res["res"]==="enrolled")
  //       this.router.navigate[`course/details/${this.CourseId}`]
  //       else 
  //       alert("wrong enrollment key")
  //     }
  //   )
  // }


}
