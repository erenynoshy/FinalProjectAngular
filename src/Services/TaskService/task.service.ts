// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {TaskPaths} from '../../Common/UrlConstants'
import { Task } from 'src/Models/TaskModel';
import {  throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class TaskService {
   
  constructor( private http: HttpClient) {
   
   }
   ngOnInit(){

   }

  getAll(CourseId:number) {
    return this.http.get(`https://localhost:44374/api/course/tasks/all/${CourseId}`)
    .pipe( catchError( this.handleError ) )
  }

  getById(TaskId:number) {
    return this.http.get<Task>(`https://localhost:44374/api/course/tasks/${TaskId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteById(TaskId:number) {
    return this.http.delete(`https://localhost:44374/api/course/deletetask/${TaskId}`)
    .pipe( catchError( this.handleError ) )
  }

  UpdateById(Task:Task) {
    return this.http.put<Task>(`api/course/edittask/${Task.TaskId}`,Task)
    .pipe( catchError( this.handleError ) )
  }

  AddTask(Task:Task) {
    return this.http.post<Task>(`api/course/AddTask/${Task.CourseId}`,Task)
    .pipe( catchError( this.handleError ) )
  }

 
   private handleError(errorResponse: HttpErrorResponse) {
     if (errorResponse.error instanceof ErrorEvent)
        console.log(errorResponse.error.message);
      else
        console.log(errorResponse.error);
      
        return throwError("dfdfd");
  }
}
