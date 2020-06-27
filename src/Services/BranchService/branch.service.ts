import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {BranchPaths} from '../../Common/UrlConstants'
import { Branch } from 'src/Models/BranchModel';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BranchService {
  constructor(private http: HttpClient) {
   
   }

  getAll() {
    console.log("get all services")
    return this.http.get<any>(BranchPaths.GetAllBranches)//http://localhots:8080/api/branches
  
  }


  getByBranchId(BranchId) {
    return this.http.get<any>(`${BranchPaths.GetBranchById}/${BranchId}`)

  }

 

  AddBranch(NewBranch) {
    console.log("in the services name")
    console.log(NewBranch.get('BranchName'))
    console.log(BranchPaths.AddBranch)
    return this.http.post<any>(`${BranchPaths.AddBranch}`,NewBranch)
     
  }
  EditBranch(EditedBranch) {
    console.log("services")
    console.log(`${BranchPaths.UpdateBranch}/${EditedBranch.BranchId}`)
    return this.http.put<any>(`${BranchPaths.UpdateBranch}/${EditedBranch.BranchId}`,EditedBranch)
     
  }
  DeleteByBranchId(BranchId) {
    console.log(BranchId)
    console.log("in services")
    return this.http.get<any>(`${BranchPaths.DeleteBranchById}/${BranchId}`)
  
  }
 
   private handleError(errorResponse: HttpErrorResponse) {
     if (errorResponse.error instanceof ErrorEvent)
        console.log(errorResponse.error.message);
      else
        console.log(errorResponse.error);
      
        return throwError("dfdfd");
  }
}
