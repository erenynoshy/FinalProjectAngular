import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/Models/CourseModel';
import { CourseService } from 'src/Services/Course/course.service'
@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }
  @Input() MyCourse;

  OnEdit() {
    console.log("my course from update course ", this.MyCourse)
    this.courseService.updateCourse(this.MyCourse).subscribe(
      res => {
        console.log(res);

        console.log(this.MyCourse, "after call")
      }
    );


  }

}
