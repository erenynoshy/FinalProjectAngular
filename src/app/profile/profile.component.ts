import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/Authentication/authentication.service';

 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileimage='../../assets/images/personprofile.png'
  constructor(private Auth: AuthenticationService) { }
  UserData={
    userName:"",
    email:"",
    city:"",
    phoneNumber:""
  }

 
  ngOnInit(): void {

 this.getuserdata();
}
 async getuserdata()
  {
    // console.log("in comp get user info")
  await  this.Auth.GetProfileUser().subscribe(
  
      res=>{
        // console.log("in the response func ")
      this.UserData=res;
    console.log(this.UserData)
    console.log(this.UserData.userName)
    
    },
    err=>{
      // console.log("in the err func")
      console.log(err.message)
    }
    )
  }

}
