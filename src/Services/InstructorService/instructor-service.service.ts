import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {

  constructor(private http: HttpClient) { }

  
  getAll() {
    console.log("get all services")
    return this.http.get<any>("https://localhost:44374/api/Instructors")//http://localhots:8080/api/branches
  
  }


  getByInstructorId(BranchId) {
    return this.http.get<any>(`https://localhost:44374/api/user/Register/${BranchId}`)

  }

 

  AddInstructor(NewBranch) {
 console.log("the add instructor")
 console.log(NewBranch)
    return this.http.post<any>(`https://localhost:44374/api/instructor/Add`,NewBranch)
     
  }
  EditInstructor(EditedBranch) {
    return this.http.put<any>(`https://localhost:44374/api/instructor/Edit/${EditedBranch.Id}`,EditedBranch)
     
  }
  DeleteByInstructorId(InstructorId) {
    return this.http.delete<any>(`https://localhost:44374/api/instructor/Delete/${InstructorId}`)
  
  }
}
