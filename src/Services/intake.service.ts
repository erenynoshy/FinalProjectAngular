import { Injectable } from '@angular/core';
import { IntakePaths } from 'src/Common/UrlConstants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  constructor(private http: HttpClient) {
   
  }

 getAll() {
   console.log("get all services")
   return this.http.get<any>(IntakePaths.GetAllIntakes)//http://localhots:8080/api/Intakes
 
 }


 



 AddIntake(NewIntake) {
   console.log("in the services name")
   console.log(NewIntake.get('IntakeName'))
   console.log(IntakePaths.AddIntake)
   return this.http.post<any>(`${IntakePaths.AddIntake}`,NewIntake)
    
 }
 EditIntake(EditedIntake) {
   console.log("services")
   console.log(`${IntakePaths.UpdateIntake}/${EditedIntake.IntakeId}`)
   return this.http.put<any>(`${IntakePaths.UpdateIntake}/${EditedIntake.IntakeId}`,EditedIntake)
    
 }
 
 getintakebyintakeid(IntakeId)
 {
   return this.http.get<any>(`https://localhost:44374/api/Intake/intakeid/${IntakeId}`);
 }
 DeleteByIntakeId(IntakeId) {
   console.log(IntakeId)
   console.log("in services")
   return this.http.get<any>(`${IntakePaths.DeleteIntakeById}/${IntakeId}`)
 
 }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent)
       console.log(errorResponse.error.message);
     else
       console.log(errorResponse.error);
     
       return throwError("dfdfd");
 }
}
