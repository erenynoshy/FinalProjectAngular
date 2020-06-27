import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as _ from 'lodash';


import { HttpClient } from '@angular/common/http';
import { Course } from 'src/Models/CourseModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }



  form: FormGroup = new FormGroup({

    CourseName: new FormControl('', Validators.required),
    Description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    IntervalInDays: new FormControl('', Validators.required),
    // StartingDate: new FormControl(''),
    EnrollmentKey: new FormControl('', Validators.required),


  });

  initializeFormGroup() {
    this.form.setValue({

      CourseName: '',
      Description: '',
      IntervalInDays: '',
      // StartingDate: Date.now, ////create in db 
      EnrollmentKey: '',


    });
  }

  

  getCourseByCourseId(CourseId:number) {
    return this.http.get(`https://localhost:44374/api/Course/ByCourseId/${CourseId}`);

  }


  getCoursesByInstructorId() {
    //   this.courseList = this.firebase.list('courses');
    return this.http.get<any>(`https://localhost:44374/api/Course/ByInstructorId`);

  }
  getCourses() {
    //   this.courseList = this.firebase.list('courses');
    return this.http.get(`https://localhost:44374/api/Course/GetCourses`);

  }
  EnrollInCourse(CourseId,EnrollmentKey) {
    //   this.courseList = this.firebase.list('courses');
    return this.http.get(`https://localhost:44374/api/Course/Enroll/${CourseId}/${EnrollmentKey}`);

  }

  insertCourse(course) {

    console.log(course)

    return this.http.post<Course>("https://localhost:44374/api/Course/Add", course);

  }

  deleteCourse(CourseId:number) {
    console.log("service course id",CourseId)
    return this.http.delete(`https://localhost:44374/api/Course/Delete/${CourseId}`)
  
  }

  updateCourse(course:Course) {
    console.log("service course id to be edited",course.CourseId)

    return this.http.put<Course>(`https://localhost:44374/api/Course/Edit`,course)
  }





  // populateForm(course) {
  //   // this.form.setValue(_.omit(course, 'departmentName'));
  // }
}
