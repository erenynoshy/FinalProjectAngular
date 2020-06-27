import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../../Services/Authentication/authentication.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
//////////////////
role;
ngOnInit(): void {

this.auth.role.subscribe(
  res=>{
    console.log("in home.......................")
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

///////////////////
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1700/600`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  constructor(private auth:AuthenticationService){}
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}




