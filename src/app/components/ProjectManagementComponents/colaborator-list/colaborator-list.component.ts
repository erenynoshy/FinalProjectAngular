import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectManagementService } from 'src/Services/project-management.service';
import { ProjectManagPaths } from 'src/Common/UrlConstants';

@Component({
  selector: 'app-colaborator-list',
  templateUrl: './colaborator-list.component.html',
  styleUrls: ['./colaborator-list.component.css']
})
export class ColaboratorListComponent implements OnInit {

  ColabEmailToBeAdded:string="";
  MyColaborators:any;
  ProjectId:number;

  constructor(private ProjManagService:ProjectManagementService,private RouteProjectId:ActivatedRoute) { }

  ngOnInit(): void {
    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
      this.getProjectColab()
    })

    
  }

  getProjectColab(){
    this.ProjManagService.getProjectCollaboratorByProjectIdAndProjectId(this.ProjectId).subscribe(
      res=>{
        console.log("inside call colab list",res)
        this.MyColaborators=res;

      })
  }

  OnAddColab(){
    if(this.ColabEmailToBeAdded=="")
    return;

    let IsAlreadyAdded:boolean;
    this.MyColaborators.forEach(element => {
      if(element['user']['email'].toLowerCase()==this.ColabEmailToBeAdded.toLowerCase()){
       IsAlreadyAdded=true;
        this.ColabEmailToBeAdded=""
        return;
      }
    });

    if(IsAlreadyAdded)
      return;

    this.ProjManagService.PostAddCollaboratorByEmail(this.ProjectId,this.ColabEmailToBeAdded)
      .subscribe(res=>{
        this.ColabEmailToBeAdded=="";
        this.getProjectColab();
      })
      this.ColabEmailToBeAdded=""

  }

  OnRemove($event,colab){
    console.log(colab,"from remove colab",colab["user"]["id"])
    this.ProjManagService.DeleteCollaboratorByUserId(colab["user"]["id"],this.ProjectId).subscribe(
      res=>{
        const index = this.MyColaborators.indexOf(colab);
        if (index > -1) {
          this.MyColaborators.splice(index, 1);
        }
      })
  }


  OnMakeOwner($event,colab){
    this.ProjManagService.MakeCollaboratorOwnerByUserId(colab["user"]["id"],this.ProjectId).subscribe(
      res=>{
        this.getProjectColab();
      }
    )
  }

}
