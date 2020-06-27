import { Component, OnInit } from '@angular/core';
import { TextMaterialService } from '../../Services/TextMaterial/text-material.service'
import { DownloadTxtFileService } from '../../Services/TextMaterial/download-txt-file.service';
import { pathToFileURL } from 'url';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { data } from 'jquery';
import { saveAs } from 'file-saver';
import { CourseMaterialService } from 'src/Services/course-material.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-matrial-box',
  templateUrl: './matrial-box.component.html',
  styleUrls: ['./matrial-box.component.css']
})
export class MatrialBoxComponent implements OnInit {

  constructor(private CourseMaterialService: CourseMaterialService
    , private coursematerialservice: CourseMaterialService
    , private routeCourseId: ActivatedRoute) { }


  coursemateriallist = [];
  filename;
  filepath;
  courseId
  UserRole
  ngOnInit(): void {
    this.getCourseIdFromUrl()
    this.GetCourseMaterial();
    this.UserRole = localStorage.getItem("role")
  }

  getCourseIdFromUrl() {

    this.routeCourseId.params.subscribe(params => {
      this.courseId = Number.parseInt(params["CourseId"])
      console.log("in material box",this.courseId )
    })
  }

  OnDelete(coursematerial) {
    this.coursematerialservice.DeleteByMaterialId(coursematerial["id"]).subscribe(
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


    this.coursematerialservice.DownloadMaterialById(material["id"]).subscribe(
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

}
