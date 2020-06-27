import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/Services/Course/course.service';
import { saveAs } from 'file-saver';
import { CourseMaterialService } from 'src/Services/course-material.service';

@Component({
  selector: 'app-explore-course-details',
  templateUrl: './explore-course-details.component.html',
  styleUrls: ['./explore-course-details.component.css']
})
export class ExploreCourseDetailsComponent implements OnInit {

 
  MyCourse;
  MyCourseId;
  UserRole;
  constructor(private RouteCourseId:ActivatedRoute,
    private CourseService:CourseService,private CourseMaterialService: CourseMaterialService) { }



coursemateriallist = [];
filename;
filepath;
courseId

ngOnInit(): void {
  this.getCourse()
  this.getCourseIdFromUrl()
  this.GetCourseMaterial();
 this.UserRole= localStorage.getItem('role')
}


  //////////////////////////////
  getCourse(){

    this.RouteCourseId.params.subscribe(params=>{
      this.MyCourseId=Number.parseInt(params["couseId"])
      console.log("course id in details",this.MyCourseId)

    })

    this.CourseService.getCourseByCourseId(this.MyCourseId).subscribe(
      res=>{
        console.log("response in details",res);
        this.MyCourse=res;

      })
  }
/////////////////////////////////////////////////////////


getCourseIdFromUrl() {

  this.RouteCourseId.params.subscribe(params => {
    this.courseId = Number.parseInt(params["couseId"])
  })
}

OnDelete(coursematerial) {
  this.CourseMaterialService.DeleteByMaterialId(coursematerial["id"]).subscribe(
    res => {
      let index = this.coursemateriallist.indexOf(coursematerial);
      if (index > -1) {
        this.coursemateriallist.splice(index, 1);
      }
    }
  )

}


GetCourseMaterial() {
  console.log("box material func")
  this.CourseMaterialService.GetCourseMaterialByCourseId(this.courseId).subscribe(
    res => {
      console.log("in the res func", res)
      this.coursemateriallist = res;

    }
  )
}


ReloadMaterials() {
  this.GetCourseMaterial()
}



download(material) {


  this.CourseMaterialService.DownloadMaterialById(material["id"]).subscribe(
    res => {

      console.log(res);
      const byteCharacters = atob(res);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      const blob = new Blob([byteArray], { type: 'application/pdf' });

      saveAs(blob, this.filename)

    },
    err => console.log(err)
  )
}
///////////////////////////////

//////////////////////////////////////////////////////////
}
