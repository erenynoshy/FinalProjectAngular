import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router} from'@angular/router';
import{IntakeServiceService}from '../../../../../Services/intake/intake-service.service'
@Component({
  selector: 'app-add-intake',
  templateUrl: './add-intake.component.html',
  styleUrls: ['./add-intake.component.css']
})
export class AddIntakeComponent implements OnInit {

  constructor(private router:Router,private intake:IntakeServiceService) { }
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      IntakeName: new FormControl(null)

    });
  }
    @ViewChild('closebutton') closebutton;
    onSubmit(data) {
      console.log("in the submiit func")
          const formData = new FormData();
          console.log(data.IntakeName)
          formData.append('IntakeName', data.IntakeName);
       
  
          this.intake.addintake(formData).subscribe(
            res=>{console.log("in th res func");
           console.log(res);
     
           this.closebutton.nativeElement.click();
       
            this.router.navigateByUrl('/admin/intake')
     
          },
            err=>{
             console.log("in the error part"); 
             console.log(err)
       
  
            }
          )
        
          this.newBlogForm.reset();
        }
     
  }


