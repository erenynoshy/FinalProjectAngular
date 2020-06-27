import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TrackService} from '../../../../../Services/TrackService/track.service';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.css']
})
export class EditTrackComponent implements OnInit {

  constructor(private track:TrackService,private branch:BranchService,private router:Router) { }
branches=[{}]

branchId;
trackname="";
val="";
  private newBlogForm: FormGroup;
  ngOnInit(): void {
   
   
    this.newBlogForm = new FormGroup({
      TrackName: new FormControl(null)
    });
    this.GetAllBranches()
  }
  tid;
  onSubmit(data) {
    console.log("in the submiit func")
        const formData = new FormData();

        this.tid=localStorage.getItem("trackval")
        formData.append('TrackName', data.TrackName);
        console.log(this.branchId)
      formData.append("BranchId",this.branchId)
      formData.append("TrackId",this.tid)
        this.track.EditTrack(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);
        this.router.navigateByUrl('/admin/tracks')
        },
          err=>{
           console.log("in the error part"); 
           console.log(err)
          this.router.navigateByUrl('/track/edit')
          }
        )
      
        this.newBlogForm.reset();
      }
      //get selected value from dropdown list
      selectChange (event: any) {
        console.log("in the function to get value drop")
        //update the ui
        this.branchId=event;
        console.log( this.branchId);
      }

      // to get the branch name
      GetAllBranches()
{
  this.trackname=localStorage.getItem("trackname")

  this.val=localStorage.getItem("trackval")
  console.log("*****************")
  console.log( this.val)
  console.log("*******************")
  this.branch.getAll().subscribe(
    res=>{
      console.log("the response")
      console.log(res)
      for(let i=0;i<res.length;i++)
      {
       
        this.branches.push(
          {"id":res[i].branchId,
            "name":res[i].branchName
        })

      }
      this.trackname=localStorage.getItem("trackname")
      console.log("-------------------")
      console.log( this.trackname)
      console.log("-------------------")
      this.val=localStorage.getItem("trackval")
      console.log(this.branches)
    },
    err=>
    {
console.log("th error ")
console.log(err)
    }
  )
}
}
