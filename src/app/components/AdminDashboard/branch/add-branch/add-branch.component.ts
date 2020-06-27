import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BranchService} from '../../../../../Services/BranchService/branch.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})

export class AddBranchComponent implements OnInit {

  constructor(private branch:BranchService,private router:Router) { }
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      BranchName: new FormControl(null),
      BranchEmail: new FormControl(null),
      BranchTelephone: new FormControl(null),
    });
  }
  @ViewChild('closebutton') closebutton;
  onSubmit(data) {
    console.log("in the submiit func")
        const formData = new FormData();
        console.log(data.BranchName)
        formData.append('BranchName', data.BranchName);
        // formData.append('IsActive', "1");
        formData.append('BranchEmail',data.BranchEmail);
      formData.append('BranchTelephone',data.BranchTelephone);

   
        this.branch.AddBranch(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);
         this.closebutton.nativeElement.click();
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {  
          this.router.navigateByUrl('/admin/branches')
         });
 
        },
          err=>{
           console.log("in the error part"); 
           console.log(err)
          
          }
        )
      
        this.newBlogForm.reset();
      }
}
