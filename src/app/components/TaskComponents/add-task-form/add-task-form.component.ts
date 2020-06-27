import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';

import { TaskService } from 'src/Services/TaskService/task.service';
import { Task } from 'src/Models/TaskModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  CourseId:number

  constructor(private MyTaskService:TaskService,private location: Location,private RouteCourseId:ActivatedRoute) { }
    
    private newTaskForm: FormGroup;

    ngOnInit(): void {
      this.newTaskForm = new FormGroup({
        TaskName: new FormControl(null),
        Description: new FormControl(null),
        DueDate: new FormControl(null),
      });
    this.getCourseIdFromRoute();  
    }


    getCourseIdFromRoute(){
      this.RouteCourseId.params.subscribe(params=>{
        this.CourseId=Number.parseInt(params["CourseId"])
        console.log("paraaaaaaaaaaam",this.CourseId)
      })
    }

    onSubmit(data) {
   
console.log("on submit",data)
      data.CourseId=this.CourseId;

      this.MyTaskService.AddTask(data).subscribe(
        res=>{
          this.location.back();
      },
      err=> this.location.back()
      )
    }

}
