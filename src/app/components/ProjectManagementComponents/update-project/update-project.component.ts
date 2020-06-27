import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  @Input() MyProject:Project;
  @Input() MyIntake;
  @Input() MyTrack;
 
  constructor(private ProjectService:ProjectService) { }

  ngOnInit(): void {
  }

  OnEdit(){
    console.log("myproject from update project ",this.MyProject)
    this.ProjectService.UpdateProject(this.MyProject).subscribe(
      res=>{
        console.log(res);
        
        console.log(this.MyProject,"afterrrrrrrrrrrr cal ")
      }
    );

  }

  SelectedOption
 
 
 
  selectedLevel;
    
      data= [
          {id: 0, name: "SD"},
          {id: 1, name: "UI"},
          {id: 2, name: "MOBILE"}
      ];
    
      selected($event){
        console.log($event.target.value);
      }

  
  }
 
  


