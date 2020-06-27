// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {TrackPaths} from '../../Common/UrlConstants'
import { Track } from 'src/Models/TrackModel';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class TrackService {
  constructor(private url: string =TrackPaths.GetAllTracks, private http: HttpClient) { }

  getAll() {
    return this.http.get<Track>(this.url)
    .pipe( catchError( this.handleError ) )
  }

  // create(resource) {
  //   return this.http.post(this.url, JSON.stringify(resource))
  //    // .map(response => response.json())
  //     //.catch(this.handleError);
  // }

  // update(resource) {
  //   return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
  //    // .map(response => response.json())      
  //    // .catch(this.handleError);
  // }

  // delete(id) {
  //   return this.http.delete(this.url + '/' + id)
  //     //.map(response => response.json())
  //     //.catch(this.handleError);
  // }

  // private handleError(error: Response) {
  //   if (error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));
  
  //   if (error.status === 404)
  //     return Observable.throw(new NotFoundError());
    
  //   return Observable.throw(new AppError(error));
  // }

   private handleError(errorResponse: HttpErrorResponse) {
     if (errorResponse.error instanceof ErrorEvent)
        console.log(errorResponse.error.message);
      else
        console.log(errorResponse.error);
      
        return throwError("dfdfd");
  }
}
