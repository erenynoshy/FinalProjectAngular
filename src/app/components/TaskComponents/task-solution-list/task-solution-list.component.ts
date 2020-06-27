import { Component, OnInit, Input } from '@angular/core';
import { TaskSolutionService } from 'src/Services/TaskSolution/task-solution.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-task-solution-list',
  templateUrl: './task-solution-list.component.html',
  styleUrls: ['./task-solution-list.component.css']
})
export class TaskSolutionListComponent implements OnInit {

  constructor(private taskSolutionService: TaskSolutionService) { 
  }
  taskSolutions;
  filename
  @Input() TaskId

  ngOnInit(): void {

this.getTaskSolutions()
  }

  getTaskSolutions()
  {
    this.taskSolutionService.GetTaskSolutionByTaskId(this.TaskId).subscribe(

      res=>{
        this.taskSolutions= res;
      }
    )
  }


  

  download(material) {


    this.taskSolutionService.DownloadMaterialById(material["taskSolutionId"]).subscribe(
      res => {

        console.log(res);
        const byteCharacters = atob(res);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });

        saveAs(blob, this.filename)

      },
      err => console.log(err)
    )
  }

  OnDelete(ts){
    this.taskSolutionService.deleteTaskSolution(ts.taskSolutionId).subscribe(
      res=>{
        const index = this.taskSolutions.indexOf(ts);
        console.log(this.taskSolutions,index,"list before delete and index")

        if (index > -1) {
          this.taskSolutions.splice(index, 1);
        }
        console.log(this.taskSolutions,"list after delete and index")
      }
    )
  }
}
