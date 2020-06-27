import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/Services/TaskService/task.service';
import { Task } from 'src/Models/TaskModel';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-submit-task',
  templateUrl: './submit-task.component.html',
  styleUrls: ['./submit-task.component.css']
})
export class SubmitTaskComponent implements OnInit {

  MyTasks
  MyTask
  CourseId:number;
  UserRole

 
  constructor(private MyTaskService:TaskService,private router: Router,private RouteCourseId:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.UserRole = localStorage.getItem('role')

    this.RouteCourseId.params.subscribe(params=>{
      this.CourseId=Number.parseInt(params["CourseId"])
      console.log("paraaaaaaaaaaam",this.CourseId)

    })
    
    this.MyTaskService.getAll(this.CourseId).subscribe(
      res => {
        
        this.MyTasks = res;
        console.log(this.MyTasks,"from submit task componnent");
      });
  }


  OnEdit($event:Event,Task:Task):void{
    this.router.navigate([`/Task/Edit/${Task["taskId"]}`])
   
  }
  OnAddTask($event){
    this.router.navigate([`/Task/Add/${this.CourseId}`])
  }
  OnDelete($event:Event,Task:Task):void{
    
    
    this.MyTaskService.DeleteById(Task["taskId"])
    .subscribe(
        res=>{let IndexOfTask=this.MyTasks.indexOf(Task)
        this.MyTasks.splice(IndexOfTask,1)} );
  }
}



// public files: NgxFileDropEntry[] = [];

// public dropped(files: NgxFileDropEntry[]) {
//   this.files = files;
//   for (const droppedFile of files) {

//     // Is it a file?
//     if (droppedFile.fileEntry.isFile) {
//       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//       fileEntry.file((file: File) => {

//         // Here you can access the real file
//         console.log(droppedFile.relativePath, file);

      

//       });
//     } else {
//       // It was a directory (empty directories are added, otherwise only files)
//       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
//       console.log(droppedFile.relativePath, fileEntry);
//     }
//   }
// }

// public fileOver(event){
//   console.log(event);
// }

// public fileLeave(event){
//   console.log(event);
// }





