import { Injectable } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  GetAllBranches()

  {
    console.log("in branch");
  
    var j=this.http.get<any>("https://localhost:44374/api/admin/branches");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }

  GetAllTracks()

  {
    console.log("in track");
  
    var j=this.http.get<any>("https://localhost:44374/api/admin/tracks");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
  
  GetAllInstructors()

  {
    console.log("in branch");
  
    var j=this.http.get<any>("https://localhost:44374/api/admin/instructors");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
  
  GetAllCourses()

  {
    console.log("in course");
  
    var j=this.http.get<any>("https://localhost:44374/api/admin/courses");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
  GetAllprojects()

  {
    console.log("in intake");
  
    var j=this.http.get<any>("https://localhost:44374/api/admin/Projects");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }

}
