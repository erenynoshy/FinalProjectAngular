import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as $ from '../../../node_modules/jquery/dist/jquery';
@Component({
  selector: 'app-comp-course',
  templateUrl: './comp-course.component.html',
  styleUrls: ['./comp-course.component.css']
})
export class CompCourseComponent implements OnInit {

  today: number = Date.now();

  imgsrc:any="assets/images/bg_1.jpg";
  constructor() { }

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

courseList=[
  {
  img:this.imgsrc,
  name:"c#",
  Description:"back end language"
  

  
    
  }, {
    img:this.imgsrc,
    name:"c#",
    Description:"back end language"
    
  
    
      
    }, {
      img:this.imgsrc,
      name:"c#",
      Description:"back end language"
      
    
      
        
      }, {
        img:this.imgsrc,
        name:"c#",
        Description:"back end language"
        
      
        
          
        },{
          img:this.imgsrc,
          name:"c#",
          Description:"back end language"
          
        
          
            
          },{
            img:this.imgsrc,
            name:"c#",
            Description:"back end language"
            
          
            
              
            },{
              img:this.imgsrc,
              name:"c#",
              Description:"back end language"
              
            
              
                
              },{
                img:this.imgsrc,
                name:"c#",
                Description:"back end language"
                
              
                
                  
                },{
                  img:this.imgsrc,
                  name:"c#",
                  Description:"back end language"
                  
                
                  
                    
                  },{
                    img:this.imgsrc,
                    name:"c#",
                    Description:"back end language"
                    
                  
                    
                      
                    }
  
]

}
