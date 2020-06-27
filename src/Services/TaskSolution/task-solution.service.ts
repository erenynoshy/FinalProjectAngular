import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TaskSolution } from 'src/Models/TaskSolution';
import { throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskSolutionService {

  constructor(private http:HttpClient) { }
 

  getAll() {
    return this.http.get<TaskSolution[]>('https://localhost:44374/api/course/tasksStd')
    .pipe( catchError( this.handleError ) )
  }

  getByTaskSolutionId(TaskSolution:number) {
    return this.http.get<TaskSolution[]>(`https://localhost:44374/api/course/tasksStd/${TaskSolution}`)
    .pipe( catchError( this.handleError ) )
  }

  GetTaskSolutionByTaskId(TaskId:number) {
    return this.http.get(`https://localhost:44374/api/course/TaskSolution/${TaskId}`)
    .pipe( catchError( this.handleError ) )
  }

  addTaskSolution(files,TaskId,CourseId) {
    let fd=new FormData();
    files.forEach(element => {
      fd.append(element.name,element,element.name)
    });
    return this.http.post(`https://localhost:44374/api/course/tasksStd/${TaskId}/${CourseId}`,fd)
    .pipe( catchError( this.handleError ) )
  }


  deleteTaskSolution(TaskSolutionId:number) {
    return this.http.delete(`https://localhost:44374/api/course/TaskSolution/${TaskSolutionId}`)
    .pipe( catchError( this.handleError ) )
  }

  DownloadMaterialById(TaskSolutionId:number) {
    // return this.http.get<any>(`${ProjectMaterialPaths.UploadByProjectById}/${MaterialId}`)
    return this.http.get<any>(`https://localhost:44374/api/TaskSolution/Download/Id/${TaskSolutionId}`)
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
