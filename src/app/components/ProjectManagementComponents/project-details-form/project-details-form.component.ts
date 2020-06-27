import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/Models/ProjectModel';
import { IntakeService } from 'src/Services/intake.service';
import { TrackService } from 'src/Services/TrackService/track.service';

@Component({
  selector: 'app-project-details-form',
  templateUrl: './project-details-form.component.html',
  styleUrls: ['./project-details-form.component.css']
})
export class ProjectDetailsFormComponent implements OnInit {

   MyProject:Project;
  httMyProject:Project;
  ProjectId:number;
  MyIntake
  MyTrack


  constructor(private MyProjectService:ProjectService,
    private RouteProjectId:ActivatedRoute,
    private intakeService:IntakeService,
    private trackService:TrackService) { 
    //this.getProject();
    console.log(this.MyProject,"inside details form on constructor")

  }
 

  ngOnInit(): void {
    
    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
      this.getProject();
    })
  }

  getProject(){
    
    this.MyProjectService.getProjectProjectId(this.ProjectId).subscribe(
      res=>{
        this.MyProject=res;
        this.getintake(this.MyProject["intakeId"])
        this.gettrack(this.MyProject["trackId"])

      })
  }

  getintake(intakeId){

    this.intakeService.getintakebyintakeid(intakeId).subscribe(
      res=>{
        this.MyIntake=res;
      }
    )
  }
  gettrack(trackId){

    this.trackService.getByTrackId(trackId).subscribe(
      res=>{
        this.MyTrack=res;
      }
    )
  }
}
