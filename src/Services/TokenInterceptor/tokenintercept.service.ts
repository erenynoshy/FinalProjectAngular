import { Injectable ,Injector } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http';
import {AuthenticationService} from '../Authentication/authentication.service'
@Injectable({
  providedIn: 'root'
})
export class TokeninterceptService implements HttpInterceptor {

  constructor(private injector:Injector ) { }
    //intercept to inject token
    intercept (req,next)
    {
      //here to  inject the services to get token from 
      let AuthServies=this.injector.get(AuthenticationService);
      console.log("inside the interceptor function")
      console.log(AuthServies.getToken())
  let tokenizedreq=req.clone({
  setHeaders:{
    Authorization: `Bearer ${AuthServies.getToken()}`
  }
  });
  
  return next.handle(tokenizedreq);
    }

}
