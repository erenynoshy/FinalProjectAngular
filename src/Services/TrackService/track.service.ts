// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {TrackPaths} from '../../Common/UrlConstants'
import { Track } from 'src/Models/TrackModel';
import {  throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class TrackService {
   
  constructor( private http: HttpClient) {
   
   }
   ngOnInit(){

   }
getcoursesbytrackid()
{
 return this.http.get<any>(`https://localhost:44374/api/Course/GetExploreCourses`);
}
getAll()
{
  return this.http.get<any>("https://localhost:44374/api/Track");
}
  getByTrackId(TrackId) {
    return this.http.get<any>(`https://localhost:44374/api/Track/Track/${TrackId}`)

    .pipe( catchError( this.handleError ) )
  }

  getByIntakeId(IntakeId:number) {
    return this.http.get<any>(`https://localhost:44374/api/Intake/intakeid/${IntakeId}`)

    .pipe( catchError( this.handleError ) )
  }

  getTracksByBranchId(BranchId) {
    return this.http.get<any>(`${TrackPaths.GetTrackByBranchId}/${BranchId}`)
    .pipe( catchError( this.handleError ) )
  }

  AddTrack(NewTrack) {
    return this.http.post<any>(`${TrackPaths.AddTrack}`,NewTrack)
    .pipe( catchError( this.handleError ) )
  }
  EditTrack(EditedTrack) {
    console.log("edited track")
    console.log(EditedTrack)
    return this.http.put<any>(`${TrackPaths.UpdateTrack}/${EditedTrack.TrackId}`,EditedTrack)
    .pipe( catchError( this.handleError ) )
  }
  DeleteByTrackId(TrackId) {
    return this.http.delete<any>(`${TrackPaths.DeleteTrackById}/${TrackId}`)
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
