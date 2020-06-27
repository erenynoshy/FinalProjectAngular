import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{AuthenticationService} from'../../Services/Authentication/authentication.service';
import "../../vendor/select2/select2.min.js";
// import "../../vendor/countdowntime/countdowntime";
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private   Auth: AuthenticationService,private router:Router){}

 //the form part


 private newBlogForm: FormGroup;
 ngOnInit(): void {
   this.newBlogForm = new FormGroup({
    UserName: new FormControl(null),
   
     Password: new FormControl(null),

   });
 }

 onSubmit(data) {
console.log("in the submiit func")
   const formData = new FormData();
 console.log(data.UserName)
 console.log(data.Password)
   formData.append('UserName', data.UserName);
 formData.append('Password',data.Password);
 console.log(FormData);
   this.Auth.loginUser(formData).subscribe(
     res=>{
       console.log("in th response func");
    console.log(res.userrole);
    localStorage.setItem('token',res.token)
    console.log("the token ",res.token)
 console.log( this.Auth.getToken())
//call get function
this.Auth.get(res.userrole)
//////////////
 localStorage.setItem("role",res.userrole)
 console.log(localStorage.getItem("role"))

  this.router.navigateByUrl('/')


  },
     err=>{
     
      alert("Invalid login info")

      
      this.router.navigateByUrl('/login')
    }
   )
 
   this.newBlogForm.reset();
 }
 



}
