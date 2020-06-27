import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as $ from 'jquery';
import { CourseService } from 'src/Services/Course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
//   today: number = Date.now();

//   imgsrc:any="assets/images/bg_1.jpg";
  constructor(private courseService : CourseService) { }
  AllCourses;
  isenrolled;
  UserRole
  ngOnInit(): void {
    this.UserRole=localStorage.getItem("role")
   
    if(this.UserRole=="Student")
    this.getStudentCourses();
    if(this.UserRole=="Instructor")
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.courseService.getCoursesByInstructorId().subscribe(
      res=>{
        this.AllCourses=res;
        console.log(this.AllCourses,"all courses after service call ")
      }
    )

  }
  getStudentCourses(){
    this.courseService.getCourses().subscribe(
      res=>{
        this.AllCourses=res;
        console.log(this.AllCourses,"all courses after service call ")
      }
    )

  }

  DeleteChildCourse(data){
    console.log(data,"on delete parent")
    //  this.AllCourses.remove(data)
    // this.courseService.getCourses().subscribe(
    //   res=>{
    //     this.AllCourses=res;
    //   }
    if(this.UserRole=="Student")
    this.getStudentCourses();
    if(this.UserRole=="Instructor")
    this.getInstructorCourses()
    // )
  }
//   url:any;
//   readUrl(event:any) {
//     if (event.target.files && event.target.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = (event: ProgressEvent) => {
//         this.imgsrc= (<FileReader>event.target).result;
//         console.log(this.imgsrc)
//       }
  
//       reader.readAsDataURL(event.target.files[0]);
//     } 
//   /**
//    *
//    */
  
// }
// /**
//  *
//  */

 
  
//   changed(event) {
//     this.  RecurFadeIn();
//     this. readURL(this);
// };

// clicked(event) {
//    this. RecurFadeIn();
// }; 
//  readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         var filename = $("#inputGroupFile01").val();
//         filename = filename.substring(filename.lastIndexOf('\\') + 1);
//         reader.onload = function (e) {
//             debugger;
//             $('#preview').attr('src', e.target.result);
//             $('#preview').hide();
//             $('#preview').fadeIn(500);
//             $('.custom-file-label').text(filename);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
//     $(".alert").removeClass("loading").hide();
// }
//  RecurFadeIn() {
//     console.log('ran');
//    this.FadeInAlert("Wait for it...");
// }
//  FadeInAlert(text) {
//     $(".alert").show();
//     $(".alert").text(text).addClass("loading");
// }

// courseList=[
//   {
//   img:this.imgsrc,
//   name:"c#",
//   Description:"back end language",
  

  
    
//   }

// ]
}
