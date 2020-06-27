import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { TaskSolutionService } from 'src/Services/TaskSolution/task-solution.service';
import { TaskSolution } from 'src/Models/TaskSolution';
import { TaskSolutionListComponent } from '../task-solution-list/task-solution-list.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css']
})
export class TaskSolutionComponent implements OnInit {

  constructor(private service:TaskSolutionService,private RouteCourseId:ActivatedRoute) { 
    
  }

public files: NgxFileDropEntry[] = [];

  @Input() MyTask;
   CourseId;
myTaskSolution=new Array();
input=new Array();
id:any

@ViewChild(TaskSolutionListComponent) tasksolutionlist:TaskSolutionListComponent;

  ngOnInit(): void {

    
    this.RouteCourseId.params.subscribe(params=>{
      this.CourseId=Number.parseInt(params["CourseId"])
      console.log("paraaaaaaaaaaam",this.CourseId)
    })
    
  }
  ngAfterViewInit() {
    // child is set
    // this.child.doSomething();
  }

  getAll(){
    this.service.getAll().subscribe(
      res=>{
        console.log(res)
        this.myTaskSolution=res;
    
       
      }
    )
  }
  AddTaskSolution(){
debugger;
console.log("from add method in task solutionn comp",this.MyTask)

  this.service.addTaskSolution(this.input,this.MyTask.taskId,this.CourseId)  
  .subscribe(data => {  
    this.tasksolutionlist.getTaskSolutions()
  },  
  error => {  
    console.log("error")  
  });
  console.log("from add method in task solutionn comp",this.MyTask.taskId)
}

  getByTaskSolutionId(id){
    this.service.getByTaskSolutionId(id).subscribe(
      res=>{
         this.myTaskSolution=res;
      },error => {  
        console.log("error")  
      });
    
  }

  

deleteTaskSolution(){
  for (const droppedFile of this.files) {
    console.log("filename:  ",droppedFile.relativePath);

    droppedFile.relativePath=null;


    
    console.log("filename become:  ",droppedFile.relativePath);
    }
}


// ////save in db
// addTaskSolution(input){
//       for (const droppedFile of this.files) {
      
//     console.log("filename:  ",droppedFile.relativePath);
//     input=droppedFile.relativePath;

// console.log("input",input);
//         // this.service.addTaskSolution(input)
//         // .subscribe(res=>{
//         //   input.push(input);


//           // input['id']=res.json().id;
//           // console.log("res",res.json())
//           this.files.splice(0,0,input);
//           console.log("this",this.files.splice(0,0,input));
//         }),
//         err=>{
//          console.log("error in add task solution"); 
//          console.log(err.message)}


         
      
//     }

   
    
 
// }
    




 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.input.push(file);
 
        
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
