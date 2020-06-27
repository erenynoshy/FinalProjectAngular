import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  UserRole
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.UserRole=localStorage.getItem("role")
    console.log(this.UserRole," user role in course")
  }
  btnClick1= function () {
    this.router.navigateByUrl('/course/add');
};
btnClick2= function () {
  this.router.navigateByUrl('/course/student');
};
}
