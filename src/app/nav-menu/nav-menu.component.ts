import { Component } from '@angular/core';
import {AuthenticationService} from '../../Services/Authentication/authentication.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
role;
token;




constructor(private auth:AuthenticationService,private router:Router){}
ngOnInit(): void {
  // this.role=localStorage.getItem("role")
  this.token=localStorage.getItem("token")
 // console.log(this.role)
this.auth.role.subscribe(
  res=>{
    console.log("in response header.......................")
    console.log(res)
    if(res=='out')
    {
    console.log("out kda ")
    this.role='out'
    console.log(this.role)
    }
   else if(res=='role')
{
  this.role='Student'
}
   else
    {
this.role=res[0];
console.log(this.role)
    }
///////////////

///////////
}
,err=>
{console.log("error")})

}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout()
  {
    console.log("in the logout function")
    localStorage.setItem('token','out')
    localStorage.setItem("role",'out')
    //call get function
this.auth.get('out')
//////////////
this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  this.router.navigateByUrl('/')
  }
)};
}
