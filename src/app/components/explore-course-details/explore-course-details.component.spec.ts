import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCourseDetailsComponent } from './explore-course-details.component';

describe('ExploreCourseDetailsComponent', () => {
  let component: ExploreCourseDetailsComponent;
  let fixture: ComponentFixture<ExploreCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
