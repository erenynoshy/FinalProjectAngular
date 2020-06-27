import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseMaterialService {

  
  constructor(private http: HttpClient) { }
  
  UploadMaterialByCourseId(CourseId:number,files,Category) {
    const fd=new FormData();
    for(let i =0; i < files.length; i++){
      fd.append("uploads[]", files[i], files[i]['name']);
    }
    return this.http.post(`https://localhost:44374/api/CourseMaterial/Upload/${CourseId}/${Category}`,fd)
    // return this.http.post<CourseMaterial[]>(`${CourseMaterialPaths.UploadByCourseById}/${CourseId}`,Files)
    .pipe( catchError( this.handleError ) )
  }

  DownloadMaterialById(MaterialId:number) {
    // return this.http.get<any>(`${CourseMaterialPaths.UploadByCourseById}/${MaterialId}`)
    return this.http.get<any>(`https://localhost:44374/api/CourseMaterial/Download/Id/${MaterialId}`)
    .pipe( catchError( this.handleError ) )
  }

  GetCourseMaterialByCourseId(CourseId:number) {
    // return this.http.get<any>(`${CourseMaterialPaths.UploadByCourseById}/${MaterialId}`)
    return this.http.get<any>(`https://localhost:44374/api/CourseMaterial/All/${CourseId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteByName(MaterialName:string) {
    // return this.http.delete<any>(`${CourseMaterialPaths.UploadByCourseById}/${MaterialName}`)
    return this.http.delete<any>(`https://localhost:44374/api/CourseMaterial/${MaterialName}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteByMaterialId(MaterialId:number) {
    // return this.http.delete<any>(`${CourseMaterialPaths.UploadByCourseById}/${MaterialName}`)
    return this.http.delete(`https://localhost:44374/api/CourseMaterial/DeleteById/${MaterialId}/${MaterialId}`)
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
