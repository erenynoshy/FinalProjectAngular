
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {Router} from '@angular/router';
import { NgModule, Component,Pipe, OnInit} from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  constructor(private branch:BranchService,private router:Router,private formBuilder: FormBuilder) { }
  private newBlogForm: FormGroup;
  id=  localStorage.getItem("branchval")
  ngOnInit(): void {
this.id=localStorage.getItem("branchval");
    this.newBlogForm = new FormGroup({
      BranchName: new FormControl(null),
      BranchEmail: new FormControl(null),
      BranchTelephone: new FormControl(null),
    });
    this.getbranchbyid();
  }
  //get branch by id 
  name;
  mail;
  phone;
  getbranchbyid()
  {
this.branch.getByBranchId(this.id).subscribe(
  res=>{
    console.log(res);
this.name=res.branchName;
this.mail=res.branchEmail;
this.phone=res.branchTelephone;

  },
  err=>{console.log("error in gettih branches")}
)
  }
 bid;


  //public open(event, item) {
    //alert('Open ' + item);
  //}
//addFabric(data){
  onSubmit(data ) {
    event.preventDefault();
    console.log("-------------------------------------------")
    console.log("in the submiit func")
        const formData = new FormData();

        console.log(data)
      //  console.log(this.bmail)
       // console.log(this.bphone)
        this.bid=localStorage.getItem("branchval")
        formData.append('BranchId',this.bid);
        if(data.BranchName==null)
        formData.append('BranchName', this.name);
        else
        formData.append('BranchName', data.BranchName);
        if(data.BranchEmail==null)
        formData.append('BranchEmail', this.mail);
        else
        formData.append('BranchEmail', data.BranchEmail);
        if(data.BranchTelephone==null)
        formData.append('BranchTelephone', this.phone);
        else
        formData.append('BranchTelephone', data.BranchTelephone);
   
   
        this.branch.EditBranch(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);
       this.router.navigateByUrl('/admin/branches')
        },
          err=>{
           console.log("in the error part"); 
           console.log(err)
        this.router.navigateByUrl('/branch/edit')
          }
        )
      
        this.newBlogForm.reset();
      }


}
