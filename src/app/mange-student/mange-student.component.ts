import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mange-student',
  templateUrl: './mange-student.component.html',
  styleUrls: ['./mange-student.component.css']
})
export class MangeStudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
students=[
  {name:"mariam"},
  {name:"roma"}
]
btnClick= function () {
  this.router.navigateByUrl('/student/details');
};
}
