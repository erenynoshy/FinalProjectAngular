import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectMaterialService } from 'src/Services/project-material.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';

@Component({
  selector: 'app-project-material-list',
  templateUrl: './project-material-list.component.html',
  styleUrls: ['./project-material-list.component.css']
})
export class ProjectMaterialListComponent implements OnInit {

  MyMaterial:ProjectMaterial[];
  MaterialCategories=new Array();

  ProjectId:number;
  
  selectedFile=new Array();
  Category
  
  FilesNamesString;
private ProjectMaterial: FormGroup;

  constructor(private ProjMatService:ProjectMaterialService,private RouteProjectId:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.ProjectMaterial = new FormGroup({
      MaterialFiles: new FormControl(null),
      Category: new FormControl(null)
    });

    this.getProjectIdFromUrl();
    this.getMaterial();
   

  }

  onSelectFile(event) {

    if(event.target.files.length<1)
    return

    for(let i=0 ; i < event.target.files.length ; i++){
      this.FilesNamesString+=`${event.target.files[i].name}`;
      this.selectedFile.push(event.target.files[i]);
     }
 
  }

  onSubmit(data) {
    
    this.Category=data.Category
    
    if(this.selectedFile==null || this.Category==null )
    return


     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile,this.Category).subscribe(
      res => {
        this.MyMaterial.push(res[0]);
        this.MaterialCategories=[];
        this.getMaterial();
          alert('Uploaded!!');

        })
   
    this.ProjectMaterial.reset();
    this.selectedFile=new Array();
    this.FilesNamesString="";
  }

  OnDelete(material){
    this.ProjMatService.DeleteByMaterialId(material.projectMaterialModelId,this.ProjectId).subscribe(
      res=>{
        const index = this.MyMaterial.indexOf(material);
        if (index > -1) {
          this.MyMaterial.splice(index, 1);
        }

      }
    )
  }

  getMaterial(){
    this.ProjMatService.GetProjectMaterialByProjectId(this.ProjectId).subscribe(
      res=>{
        
        res.forEach(element => {
          // debugger
          if(this.MaterialCategories.indexOf(element.category)==-1)
          this.MaterialCategories.push (element["category"])
        });
        this.MyMaterial=res;
        console.log(res,this.MaterialCategories,"materrrrrrrrrrial by project id")
      }
    )
  }
  getProjectIdFromUrl(){

    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })
  }

}
