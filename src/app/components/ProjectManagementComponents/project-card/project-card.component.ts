import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { Router } from '@angular/router';
import { ProjectService } from 'src/Services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() MyProject;
 
  

  constructor(private router:Router,private MyProjectService:ProjectService) { }

  ngOnInit(): void {
    console.log("inside project card", this.MyProject)
  }

  OnClickDetails(){
    this.router.navigate([`/Project/Details/${this.MyProject["project"]["projectModelId"]}`]);
  }


  @Output() onDeleteProject: EventEmitter<any> = new EventEmitter<any>();
  OnClickDelete(){

    // console.log(this.MyProject)

    this.MyProjectService.DeleteProject(this.MyProject["project"]["projectModelId"]).subscribe(
      res=>{
        console.log("deleteeeeeeeeeeeeeeeeeeeeeeeeeed")
        this.onDeleteProject.emit(this.MyProject);
      }
    );
  }
 
}
