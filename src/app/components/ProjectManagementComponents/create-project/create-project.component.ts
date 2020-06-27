import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IntakeService } from 'src/Services/intake.service';
import { TrackService } from 'src/Services/TrackService/track.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private MyIntakeService:IntakeService,private MyTrackService:TrackService) { }

  ngOnInit(): void {
    this.UserRole=localStorage.getItem("role")
    if(this.UserRole=="instructor"){
      this.getAllIntakes();
      this.getAllTracks();
    }
    
  }

  SelectedTrack;

  SelectedIntake;

  Intakes;
  
  Tracks;

  project;
    
  UserRole;

@Output() myEvent=new EventEmitter()

getAllIntakes(){

  this.MyIntakeService.getAll().subscribe(
    res=>{
      this.Intakes=res;
      console.log("allintakes",res)

    }
  );
}
getAllTracks(){
  this.MyTrackService.getAll().subscribe(
    res=>{
      this.Tracks=res;
      console.log("alltracks",res)
    }
  )
}
 add(ProjectName,ProjectDescription){
  //  if(this.UserRole)
  //   this.project={
  //    ProjectName,
  //    ProjectDescription,
  //    TrackId:this.SelectedTrack.TrackId,
  //    IntakeId:this.SelectedIntake.IntakeId,
  //   }
  //   else
    this.project={
      ProjectName,
      ProjectDescription,}

   this.myEvent.emit(this.project)
 }
  
      OnSelectIntake($event){
        console.log($event.target.value);
        this.SelectedIntake=$event.target.value
      }

      OnSelectTrack($event){
        console.log($event.target.value);
        this.SelectedTrack=$event.target.value

      }

  
}
