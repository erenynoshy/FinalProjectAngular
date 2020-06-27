import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/Course/course.service';
import { EnrollKeyComponent } from '../enroll-key/enroll-key.component';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  UserRole

  ngOnInit(): void {
    
    this.UserRole=localStorage.getItem("role")
    console.log(this.UserRole,"user role")
    //console.log("in oninit",this.Course.courseId);
    this.Course.courseId

  }
  @Output() onDeleteCourse: EventEmitter<any> = new EventEmitter<any>();
  public DeleteCourse(): void {
    console.log(this.Course)
    this.onDeleteCourse.emit(this.Course);
}
 
  @Input() Course;
  constructor(private router: Router, private coursesService: CourseService) { }



  OnDetails() {
    this.router.navigate([`course/details/${this.Course['courseId']}`]);

  };

 

  DeleteCourseCard() {
  
    console.log("course id", this.Course['courseId'])
    this.coursesService.deleteCourse(this.Course['courseId']).subscribe(
      res => {
        console.log(res, "response from delete course")
        this.DeleteCourse()
      //  this.router.navigate([''])
      
      },
      err => {
        console.log(err)
      }
    );

  }


  EnrollmentKey=""
  OnEnroll(){
    if(this.EnrollmentKey==="")
    return 

    console.log(this.Course,"coursein course card modal")
    this.coursesService.EnrollInCourse(this.Course.courseId,this.EnrollmentKey).subscribe(
      res=>{
       let x= (res["res"]==="enrolled")
        console.log(res,x,"respone of enroolment")
        if(res["res"]==="enrolled"){
          this.router.navigate([`course/details/${this.Course['courseId']}`]);

          //this.router.navigateByUrl[`course/details/${this.Course.courseId}`]
        }
        else 
        alert("wrong enrollment key")
      }
    )
  }


}
