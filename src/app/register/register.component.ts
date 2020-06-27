
import { Component, OnInit, AfterViewInit  } from '@angular/core';
// import {RegisterModdel} from '../../model/RegisterModel';
import{AuthenticationService} from'../../Services/Authentication/authentication.service';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TrackService } from 'src/Services/TrackService/track.service';
import { BranchService } from 'src/Services/BranchService/branch.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  imgsrc:any="../../assets/images/avatar-01.jpg";
  constructor(private   Auth: AuthenticationService,private router:Router,private track:TrackService,private branch:BranchService) { }
  //the form part

  selectedFile: File = null;
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      UserName: new FormControl(null),
      ProfileImage: new FormControl(null),
      City: new FormControl(null),
      Password: new FormControl(null,Validators.minLength(6)),
    Email: new FormControl(null),
    branchId:new FormControl(null),
      trackId:new FormControl(null),
      IntakeId:new FormControl(null)
    });
    this.GetAllBranches()
    // this.GetAllTracks()
  }
  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }
  onSubmit(data) {
console.log("in the submiit func")
    const formData = new FormData();
  
    console.log(data)
    formData.append('UserName', data.UserName);
    formData.append('ProfileImage', this.selectedFile);
    formData.append('City',data.City);
  formData.append('Email',data.Email);
  formData.append("BranchId",this.bId)
  formData.append("TrackId",this.tId)
  formData.append('Password',data.Password);
  formData.append('IntakeId',data.IntakeId);
  console.log(FormData,"hdddddddddddddddddddddddddd");
    this.Auth.registerUser(formData).subscribe(
      res=>{
        //call get function
this.Auth.get(res.userrole)
//////////////
      console.log("in th res func");
     console.log(res);
     localStorage.setItem('token',res.token)
     console.log("the token ")
  console.log( this.Auth.getToken())
    localStorage.setItem("role",res.userrole)
    console.log(localStorage.getItem("role"))
    this.router.navigateByUrl('/')
    },
      err=>{
       console.log("in the error part"); 
       console.log(err)
       alert("Please, Enter valid data\n"+err.error)

       //this.router.navigateByUrl('/register')

      }
    )
  
    this.newBlogForm.reset();
  }
  
 //to handle the services
 userreg:any={
   name:"",
   Email:"",
  City:"",
Password:"",
ProfileImage:null
 };

 registerUser()
 {
   console.log("in user func");
   console.log(this.userreg);
   console.log("the user data above")
   this.Auth.registerUser(this.userreg).subscribe(
     res=>{console.log("in th res func");
    console.log(res);},
     err=>{
      console.log("in the error part"); 
      console.log(err.message)}
      )
      alert("Plaese, Enter valid data");
   }
  // to handel the image upload
  url:any;
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgsrc= (<FileReader>event.target).result;
        // console.log(this.imgsrc)
      }
      this.selectedFile = <File>event.target.files[0]; 
      reader.readAsDataURL(event.target.files[0]);
    }
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
