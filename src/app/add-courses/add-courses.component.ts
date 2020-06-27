import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { importType } from '@angular/compiler/src/output/output_ast';
import{CourseService} from '../../Services/Course/course.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {


  today: number = Date.now();

  imgsrc:any="assets/images/book.jpg";
  constructor(private service: CourseService,private router:Router) { 
  
  }
  
  url:any;
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgsrc= (<FileReader>event.target).result;
        console.log(this.imgsrc)
      }
  
      reader.readAsDataURL(event.target.files[0]);
    } 
  /**
   *
   */
  
}
/**
 *
 */

  ngOnInit(): void {
  }

  
  changed(event) {
    this.  RecurFadeIn();
    this. readURL(this);
};

clicked(event) {
   this. RecurFadeIn();
}; 
 readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var filename = $("#inputGroupFile01").val();
        filename = filename.substring(filename.lastIndexOf('\\') + 1);
        reader.onload = function (e) {
            debugger;
            $('#preview').attr('src', e.target.result);
            $('#preview').hide();
            $('#preview').fadeIn(500);
            $('.custom-file-label').text(filename);
        }
        reader.readAsDataURL(input.files[0]);
    }
    $(".alert").removeClass("loading").hide();
}
 RecurFadeIn() {
    console.log('ran');
   this.FadeInAlert("Wait for it...");
}
 FadeInAlert(text) {
    $(".alert").show();
    $(".alert").text(text).addClass("loading");
}
/////////////////////////
onSubmit() {
  if (this.service.form.valid) {
    this.service.insertCourse(this.service.form.value).subscribe(
      res=>{
        this.router.navigate(["/course"])
      },
      err=>{
        this.FadeInAlert("Try again later");
        console.log(err);
      }
    );
    this.service.form.reset();
    this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
    // this.onClose();
  }
}
}


///////////////////////////