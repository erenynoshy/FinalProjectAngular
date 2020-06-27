import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectManagementService } from 'src/Services/project-management.service';

@Component({
  selector: 'app-explore-teams',
  templateUrl: './explore-teams.component.html',
  styleUrls: ['./explore-teams.component.css']
})
export class ExploreTeamsComponent implements OnInit {
  ProjectId:number;
  members;
  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute,private member:ProjectManagementService) { }

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
            
          
    //collaborator
    
    this.member.getProjectCollaboratorByProjectIdAndProjectId(this.ProjectId)
        .subscribe(
          res=>{
            this.members=res;
            console.log("members in details project",this.members)
            console.log("email",this.members[0].userProject.myUserModel.email)
    
            
          })
    
    
         
      }
        )}
      
}
