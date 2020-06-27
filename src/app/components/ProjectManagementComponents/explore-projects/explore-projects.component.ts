import { Component, OnInit, Output } from '@angular/core';


import { Router } from '@angular/router';
import { ProjectService } from 'src/Services/project.service';
import { ProjectManagementService } from 'src/Services/project-management.service';
import { TrackService } from 'src/Services/TrackService/track.service';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})

export class ExploreProjectsComponent implements OnInit {
   MyProject:any
   myIntake:any
  projectModelId: number;
  trackId:number
  intakeId:number
  constructor(private services: ProjectService, private router: Router,private member:ProjectManagementService,private track:TrackService) { }
  MyProjects;

  ngOnInit(): void {
    //  console.log( this.getAllProjects());
    //  console.log("dffdfdfd")
    //  console.log("inside project card", this.MyProject)

    this.getAllProjects()
  }
  @Output() Projects
  getAllProjects() {
    this.services.getAllProjects().subscribe(
      res => {
        console.log(res)
        this.MyProjects = res;
        // this.MyProjects.push(res);
       console.log(this.MyProjects)

      }

    )
  }
  getID(projId:number ,id: number,Intake:number) {
    this.router.navigate([`explore/project/details/${projId}`])
    
    this.projectModelId = projId;
    this.trackId = id;
    this.intakeId = Intake;
    // console.log(id);
    // console.log(this.trackId);
    console.log("intake",this.intakeId);
    this.member.getProjectCollaboratorByProjectIdAndProjectId(this.projectModelId)
    .subscribe(
      res=>{
        console.log("members",res)
        // this.MyProject=res;
        // console.log(this.MyProject)
      }
    )
    ,


    this.track.getByTrackId(this.trackId)
    .subscribe(
      res=>{
        console.log(res)
       this.MyProject=res;

      }
    ),
    this.track.getByIntakeId(this.intakeId)
    .subscribe(
      res=>{
        console.log("intake is ",res)
        this.myIntake=res
      }
    )
    
  }
  
}
