import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ProjectManagPaths} from '../Common/UrlConstants'


@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor(private http: HttpClient) { }

  
  getProjectCollaboratorByProjectIdAndProjectId(ProjectId:number) {
    // return this.http.get<any[]>(ProjectManagPaths.GetCollabByProjId)
    return this.http.get<any[]>(`https://localhost:44374/api/Collaborator/${ProjectId}`)
    .pipe( catchError( this.handleError ) )
  }

  PostAddCollaboratorByEmail(ProjectId:number,Email:string) {
    console.log("from service add cola",ProjectId,Email)
    let c;
    // return this.http.get<any>(`${ProjectManagPaths}/${ProjectId}/${Email}`)
    return this.http.post<any>(`api/PM/${ProjectId}/${Email}`,c)
    .pipe( catchError( this.handleError ) )
  }

  MakeCollaboratorOwnerByUserId(CollabId:number,ProjectId:number) {
    // return this.http.get(`${ProjectManagPaths.MakeOwnerByUserId}/${CollabId}`)
    let c;
    return this.http.post(`api/PM/MakeOwner/${CollabId}/${ProjectId}`,c)
    .pipe( catchError( this.handleError ) )
  }

  DeleteCollaboratorByUserId(UserId:string,ProjectId:number){
    // return this.http.get(`${ProjectManagPaths.DeleteCollabByUserId}/${UserId}`)
    return this.http.delete(`api/PM/Remove/${UserId}/${ProjectId}`)
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
