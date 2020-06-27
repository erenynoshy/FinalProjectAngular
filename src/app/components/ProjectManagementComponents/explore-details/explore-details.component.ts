import { Component, OnInit } from '@angular/core';

import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from 'src/Services/TrackService/track.service';

@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.component.html',
  styleUrls: ['./explore-details.component.css']
})
export class ExploreDetailsComponent implements OnInit {
  MyProject;
  tracks;
  intake;
 
  // httMyProject:Project;
  ProjectId:number;
  intakeId:number
  trackId:number
  projectName:string
  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute,private track:TrackService) { }

  ngOnInit(): void {
    
    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })

    this.getProject();
   
  }
  getProject(){
//project name and description
console.log("project data",this.ProjectId)
    this.MyProjectService.getProjectProjectId(this.ProjectId).subscribe(
      res=>{
        console.log(res,"explore details response")
      

        this.MyProject=res;
        console.log("track Id", this.MyProject.trackId)

        //track data
this.track.getByTrackId(this.MyProject.trackId)
.subscribe(
  res=>{
this.tracks=res;
console.log("track in details project",this.tracks.trackName)

  }
)

      //intake data
      this.track.getByIntakeId(this.MyProject.intakeId)
      .subscribe(
        res=>{
          this.intake=res;
          console.log("intake in details project",this.intake.intakeName)
  
          
        })
  }
    )}
  
}
