import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TrackService} from '../../../../../Services/TrackService/track.service';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {InstructorServiceService} from '../../../../../Services/InstructorService/instructor-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.css']
})
export class AddInstructorsComponent implements OnInit {

  constructor(private track:TrackService,private router:Router,private branch:BranchService,private instructor:InstructorServiceService) { }
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.GetAllBranches()
   // this.GetAllTracks()
    this.newBlogForm = new FormGroup({
      UserName: new FormControl(null),
      branchId:new FormControl(null),
      trackId:new FormControl(null),
      Password:new FormControl(null),
      City:new FormControl(null),
      PhoneNumber:new FormControl(null),
      Email:new FormControl(null)
    });
  }
  ///////////////////////////////////////////////submit part//////////////////////////////////////////
  @ViewChild('closebutton') closebutton;
  onSubmit(data) {
    console.log("in the submiit func")
        const formData = new FormData();
       
        formData.append('UserName', data.UserName);
      formData.append("BranchId",this.bId)
      formData.append("TrackId",this.tId)
      formData.append("Email",data.Email),
      formData.append("PhoneNumber",data.PhoneNumber)
      formData.append("City",data.City)
      formData.append("Password",data.Password)
      console.log(formData.get("UserName"))
              this.instructor.AddInstructor(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);
         this.closebutton.nativeElement.click();
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigateByUrl('/admin/instructors')
        }); 

        },
          err=>{
           console.log("in the error part"); 
           console.log(err)}
        )
      
        this.newBlogForm.reset();
      }
  ////////////////////////////////////////////////track part//////////////////////////////////////////
 tracks=[{
  "trackId":"",
  "trackName":"",
  "branch":""
 }]
 tId;
        //get selected value from dropdown list
        selectChangeTrack (event: any) {
         console.log("in the function track")
         //update the ui
         this.tId=event;
         console.log( this.tId);
       }
 //to get all branches
     // to get the branch name
    
//  GetAllTracks()
//  {
//    this.track.getAll().subscribe(
//      res=>{
//        console.log("the response")
//        console.log(res)
//        for(let i=0;i<res.length;i++)
//        {
        
//          this.tracks.push(
//            {
//              "id":res[i].trackId,
//              "name":res[i].trackName,
//          "branch":res[i].branchId
         
//          })
 
//        }
//        console.log(this.tracks)
//      },
//      err=>
//      {
//  console.log("th error ")
//  console.log(err)
//      }
//    )
//  }
 ////////////////////////////////////////////branch part/////////////////////////////////////////
 branches=[{}]
bId;
      //get selected value from dropdown list
      selectChangeBranch(event: any) {
        this.tracks=[{
          "trackId":"",
          "trackName":"",
          "branch":""
         }]
       console.log("in the function branch")
       //update the ui
       this.bId=event;
       console.log( this.bId);
       this.track.getTracksByBranchId(this.bId).subscribe(
        res=>{
          console.log("the response of track branch")
          console.log(res.length)

console.log("tttttttttttttttttt")
console.log(this.tracks)
          for(let i=0;i<res.length;i++)
          {
           console.log(res[i].trackName)
            this.tracks.push(
              {
                "trackId":res[i].trackId,
                "trackName":res[i].trackName,
            "branch":res[i].branchId
            
            })
    
          }
          console.log("+++++++++++++++++++++++++++++++++")
          console.log(this.tracks)
        },
        err=>
        {
    console.log("th error ")
    console.log(err)
        }
       )
     }
//to get all branches
   // to get the branch name
   GetAllBranches()
   {
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
