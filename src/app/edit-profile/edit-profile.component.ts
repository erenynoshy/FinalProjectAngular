import { Component, OnInit,ViewChild } from '@angular/core';
import * as $ from 'jquery';
import {AuthenticationService} from "../../Services/Authentication/authentication.service";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router} from'@angular/router'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  imgsrc:any="../../assets/images/avatar-01.jpg";
  constructor(private Auth:AuthenticationService,private router:Router) { }

  selectedFile: File = null;
  UserData={
    userName:"",
    email:"",
    city:"",
    phoneNumber:"",
    branchId:'',
    trackId:'',
    ProfileImage:'',
    id:''
  }
  
  private newBlogForm: FormGroup;
  ngOnInit(): void {
      //to fill the form 
  this.newBlogForm = new FormGroup({
    userName:  new FormControl(null),
    ProfileImage: new FormControl(null),
    city:  new FormControl(null),
    phoneNumber: new FormControl(null),
  email: new FormControl(null),
  bId: new FormControl(null),
  tId: new FormControl(null)
  });
   this.getdata();
  
  
  }
 getdata()
 {
    //to get that user data 
    console.log("in comp get user info")
  this.Auth.GetProfileUser().subscribe(

    res=>{
      console.log("in the response func ")
      console.log(res);
      this.UserData=res;
console.log(this.UserData)
 console.log(this.UserData.userName)
 console.log(this.UserData.email)
 console.log(this.UserData.city)
console.log(res.city)
console.log("----------------------")
  },
  err=>{
    console.log("in the err func")
    console.log(err.message)
  }
  )
 }
 @ViewChild('closebutton') closebutton;
  onSubmit(data) {
console.log("in the submiit func")
    const formData = new FormData();
    console.log("the data ")
    console.log(data.userName)
    formData.append('Id', this.UserData.id);
    if(data.userName==null)
    formData.append('UserName', this.UserData.userName);
    else
    formData.append('UserName', data.userName);
    if(data.ProfileImage==null)
    formData.append('ProfileImage', this.UserData.ProfileImage);
    else
    formData.append('ProfileImage', data.ProfileImage);
    if(data.city==null)
    formData.append('City',this.UserData.city);
    else
    formData.append('City',data.city);
    if(data.email==null)
    formData.append('Email',this.UserData.email);
    else
  formData.append('Email',data.email);
 
  formData.append('PhoneNumber',data.phoneNumber);
  console.log(FormData);
    this.Auth.EditProfileUser(formData).subscribe(
      res=>{
      console.log("in th res func");
     console.log(res);
    
     this.closebutton.nativeElement.click();

      this.router.navigateByUrl('/profile')

    
    },
      err=>{
       console.log("in the error part"); 
       console.log(err.message)}
    )
  
    this.newBlogForm.reset();
  }
  //the upload image part
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgsrc= (<FileReader>event.target).result;
        console.log(this.imgsrc)
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
