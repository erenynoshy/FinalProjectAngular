import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/Models/TaskModel';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  constructor() { }
@Input() MyTask:Task
  ngOnInit(): void {
    let index=this.MyTask["dueDate"].indexOf("T");

    this.MyTask["dueDate"]=this.MyTask["dueDate"].slice(0,index)
  }

}
