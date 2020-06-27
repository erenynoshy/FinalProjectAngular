import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ProjectPaths} from '../Common/UrlConstants'
import { Project } from 'src/Models/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
 
  
  getProjectProjectId(ProjectId:number) {
    // return this.http.get<Project>(`${`http://localhost:3000/projects`}/${ProjectId}`)
     return this.http.get<Project>(`https://localhost:44374/api/Project/Project/${ProjectId}`)
    .pipe( catchError( this.handleError ) )
  }
  GetProjectByTrackId(TrackId:number) {
    // return this.http.get<Project[]>(`${ProjectPaths.GetProjectByTrackId}/${TrackId}`)
    return this.http.get<Project[]>(`https://localhost:44374/api/Project/Track/${TrackId}`)
    .pipe( catchError( this.handleError ) )
  }
  GetProjectByStudentId() {
 
      // return this.http.get<Project[]>(`${ProjectPaths.GetProjectByStudentId}`)
      // return this.http.get<Project[]>(`http://localhost:3000/projects`)
      console.log(ProjectPaths,"project paths")
       return this.http.get<Project[]>(`https://localhost:44374/api/Project/Student`)
    .pipe( catchError( this.handleError ) )
  }

  AddProjectByTrackId(Project,TrackId,IntakeId) {
    //return this.http.post<Project>(`${ProjectPaths.AddProjectByTrackId}`,Project)
    
    return this.http.post<Project>(`https://localhost:44374/api/Project/Add/${TrackId}/${IntakeId}`,Project)
    .pipe( catchError( this.handleError ) )
  }
  UpdateProject(Project:Project) {
    // return this.http.put<Project>(`${ProjectPaths.UpdateProject}`,Project)
    return this.http.put<Project>(`https://localhost:44374/api/Project/Edit`,Project)
    .pipe( catchError( this.handleError ) )
  }

  getAllProjects() {
    return this.http.get('https://localhost:44374/api/selectProjects')
    .pipe( catchError( this.handleError ) )
  }
  DeleteProject(ProjectId:number) {
    // return this.http.delete<Project>(`${ProjectPaths.UpdateProject}/${ProjectId}`)
    return this.http.delete<Project>(`https://localhost:44374/api/Project/Delete/${ProjectId}`)
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
