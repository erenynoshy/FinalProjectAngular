import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

import { Task } from 'src/Models/TaskModel';
import { TaskService } from 'src/Services/TaskService/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css']
})
export class EditTaskFormComponent implements OnInit {

  constructor(private MyTaskService:TaskService,private router:Router,private RouteTaskId:ActivatedRoute) {

   }

  MyTask:Task;
  TaskId:number;

  ngOnInit(): void {
    this.RouteTaskId.params.subscribe(params=>{
      this.TaskId=Number.parseInt(params["TaskId"])
      console.log("paraaaaaaaaaaam",this.TaskId)
    })

   
    console.log("from  edit form before call")

    this.MyTaskService.getById(this.TaskId).subscribe(
      res=>{
        console.log("from  edit form after call",res)
        let index=res["dueDate"].indexOf("T");

        res["dueDate"]=res["dueDate"].slice(0,index)
        this.MyTask=res;
        console.log("from  edit form after date to string",new Date(this.MyTask["dueDate"]))

     },
    err=> console.log(err,this.TaskId)
    )}

    OnEdit(){

      this.MyTaskService.UpdateById(this.MyTask).subscribe(
        res=>{
          this.router.navigate([`course/details/${this.MyTask["courseId"]}`])
        }
      )
    }
}
