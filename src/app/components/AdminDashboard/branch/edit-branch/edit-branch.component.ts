
import { NgModule, Component,Pipe, OnInit} from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  constructor(private branch:BranchService,private router:Router,private formBuilder: FormBuilder) { }
  private newBlogForm: FormGroup;
  id=  localStorage.getItem("branchval")
  ngOnInit(): void {
this.id=localStorage.getItem("branchval");
    this.newBlogForm = this.formBuilder.group({
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
  bname="new";
  bmail="new@new.com";
  bphone="44444";

  //public open(event, item) {
    //alert('Open ' + item);
  //}
//addFabric(data){
  onSubmit(data : FormData) {
    event.preventDefault();
    console.log("-------------------------------------------")
    console.log("in the submiit func")
        const formData = new FormData();

        console.log(data)
      //  console.log(this.bmail)
       // console.log(this.bphone)
        this.bid=localStorage.getItem("branchval")
        formData.append('BranchId',this.bid);
        formData.append('BranchName', this.bname);
        // formData.append('IsActive', "1");
      formData.append('BranchEmail',this.bmail);
     formData.append('BranchTelephone',this.bphone);
   
    //     this.branch.EditBranch(formData).subscribe(
    //       res=>{console.log("in th res func");
    //      console.log(res);
    //  //   this.router.navigateByUrl('/admin/branches')
    //     },
    //       err=>{
    //        console.log("in the error part"); 
    //        console.log(err)
    // //       this.router.navigateByUrl('/branch/edit')
    //       }
    //     )
      
        this.newBlogForm.reset();
      }
}
