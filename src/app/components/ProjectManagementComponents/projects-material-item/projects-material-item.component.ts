import { Component, OnInit, Input } from '@angular/core';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';
import { ProjectMaterialPaths } from 'src/Common/UrlConstants';
import { ProjectMaterialService } from 'src/Services/project-material.service';
import { FileSaverService } from 'ngx-filesaver';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-projects-material-item',
  templateUrl: './projects-material-item.component.html',
  styleUrls: ['./projects-material-item.component.css']
})
export class ProjectsMaterialItemComponent implements OnInit {
  @Input()MyMaterial;
  // DisplayName:string
  DownloadLink:string
  filename

  constructor(private ProjMatServ:ProjectMaterialService, private _FileSaverService: FileSaverService) { }

  ngOnInit(): void {

    // this.DownloadLink=`${ProjectMaterialPaths.DownloadById}/${this.MyMaterial.MaterialId}`
     this.DownloadLink=`https://localhost:44347/api/ProjectMaterial/Download/${this.MyMaterial.PathOnServer}`

  }

  

  download(material) {


    this.ProjMatServ.DownloadMaterialById(this.MyMaterial.projectMaterialModelId).subscribe(
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

  OnClick(){

    this.ProjMatServ.DownloadMaterialById(this.MyMaterial.projectMaterialModelId).subscribe(
      res=>{
        let f=res["file"]["fileContents"];
        let fn=res["file"]["fileDownloadName"];
        console.log(res,"the dowwwwwwwwwwnload file",f,fn)
        this._FileSaverService.save(f, fn);
      
      }
    )
  }

  downloadFile(data) {
    console.log("dataaaaaaaaa",data)
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
