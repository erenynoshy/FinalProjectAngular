import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TextMaterialService} from '../../Services/TextMaterial/text-material.service';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { CourseMaterialService } from 'src/Services/course-material.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  constructor(public courseMaterialService:CourseMaterialService,private RouteCourseId:ActivatedRoute) { }
  selectedFile=new Array();
  private newBlogForm: FormGroup;
  Category=""
  courseId
  UserRole
  @Output() onAddingNewMaterial = new EventEmitter();
  ngOnInit(): void {
    this.UserRole = localStorage.getItem("role");

    this.getCourseIdFromUrl()
    this.newBlogForm = new FormGroup({
     
      MaterialFile: new FormControl(null),
      // Category: new FormControl(null)
    
    });
  }
 

  getCourseIdFromUrl(){

    this.RouteCourseId.params.subscribe(params=>{
      this.courseId=Number.parseInt(params["CourseId"])
    })
  }

  @ViewChild('closeModal') private closeModal: ElementRef;
public hideModel() {
        this.closeModal.nativeElement.click();      
}
  onSubmit(data) {
    // this.Category=data.Category
    console.log(this.Category,this.selectedFile)
    
    if(this.selectedFile==null || this.Category==null )
    return

    this.courseMaterialService.UploadMaterialByCourseId(this.courseId,this.selectedFile,this.Category).subscribe(
      res => {

        this.hideModel()
        alert('Uploaded!!');
        this.onAddingNewMaterial.emit();
        })
        this.selectedFile=new Array();
   
        this.newBlogForm.reset();
      
    }

    
    
      selected(){
      }

  //for the file section
  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
   
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.selectedFile.push(file);
   
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
