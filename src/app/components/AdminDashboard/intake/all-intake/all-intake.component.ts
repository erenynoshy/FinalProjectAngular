import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Intake} from 'src/Models/intakeModel';
import {IntakeServiceService} from '../../../../../Services/intake/intake-service.service';
@Component({
  selector: 'app-all-intake',
  templateUrl: './all-intake.component.html',
  styleUrls: ['./all-intake.component.css']
})
export class AllIntakeComponent implements OnInit {

  constructor(private intake:IntakeServiceService,private router:Router) { }

  ngOnInit(): void {
   this.GetAllIntakes();
  }
  intakes:Intake[];
  deleteTrack(i)
  {

    console.log("the id to del")
    console.log(i)
    var id =this.intakes[i].intakeId;
    console.log(this.intakes[i])
    this.intake.deleteintake(id).subscribe(
      res=>{console.log("success")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl('/admin/tracks')
    });
    },
    err=>{console.log("error part"),
  console.log(err)
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigateByUrl('/admin/tracks')
});
}
    )}


    GetAllIntakes()
    {
      this.intake.getAll().subscribe(
        res=>{
          console.log("the response")
          console.log(res)
          this.intakes=res;
        
      
          
          console.log(this.intakes)
        },
        err=>
        {
    console.log("th error ")
    console.log(err)
        }
      )
    }
}
