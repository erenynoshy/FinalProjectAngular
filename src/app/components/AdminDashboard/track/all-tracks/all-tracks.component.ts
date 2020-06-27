import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {TrackService} from '../../../../../Services/TrackService/track.service';
import {Router} from '@angular/router';
import { Track } from 'src/Models/TrackModel';
@Component({
  selector: 'app-all-tracks',
  templateUrl: './all-tracks.component.html',
  styleUrls: ['./all-tracks.component.css']
})
export class AllTracksComponent implements OnInit {

  constructor(private track:TrackService,private branch:BranchService,private router:Router) { }

  ngOnInit(): void {
    this.GetAllTracks()
  }
 
  tracks:Track[];
  deleteTrack(i)
  {

    console.log("the id to del")
    console.log(i)
    var id =this.tracks[i].trackId;
    console.log(this.tracks[i])
    this.track.DeleteByTrackId(id).subscribe(
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
    )
  }
  trackid
  getid(id)
  {
     console.log("to get the clicked id ")
     console.log(id)
  
     
            this.track.getByTrackId(id).subscribe(
              res=>{
                console.log("success");
             console.log(res.trackId)
                localStorage.setItem("trackval",res.trackId)
                localStorage.setItem("trackname",res.trackName)
             
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                  this.router.navigateByUrl('/track/edit')
              });
              }
              ,err=>{
                console.log("error")
              }
            )
          
  }
  GetAllTracks()
  {
    this.track.getAll().subscribe(
      res=>{
        console.log("the response")
        console.log(res)
        this.tracks=res;
        for(let i=0;i<res.length;i++)
        {
          
           this.branch.getByBranchId(res[i].branchId).subscribe(
              response=>
              {
                // this.tracks.push(
                //   {
                //     "TrackId":res[i].trackId,
                //     "TrackName":res[i].trackName,
                // "BranchName":
                
                // })
                
                console.log(this.tracks[i])
                this.tracks[i].BranchName=response.branchName
                console.log(this.tracks[i])
              }
            )
          

    
  
        }
        console.log(this.tracks)
      },
      err=>
      {
  console.log("th error ")
  console.log(err)
      }
    )
  }
}
