import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';
import { Router } from '@angular/router';
import { TrackService } from 'src/Services/TrackService/track.service';

@Component({
  
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(private MyProjectService: ProjectService) { }
  @Input() projects

  MyProjects;

  ngOnInit(): void {

    this.getProjectsByStudentId();
  }

  getProjectsByStudentId(){
    this.MyProjectService.GetProjectByStudentId().subscribe(
      res=>{
        this.MyProjects=res;//["project"];
      }
    )
  }
  

  OnProjectDeleted(project){
    let index =this.MyProjects.indexOf(project)
    if(index>-1){
      this.MyProjects.splice(index, 1);
    }
  }
  
  tas(t){
    this.MyProjectService.AddProjectByTrackId(t,1,1).subscribe(
      res=>{
        this.getProjectsByStudentId();
      }
    )

  }
}
