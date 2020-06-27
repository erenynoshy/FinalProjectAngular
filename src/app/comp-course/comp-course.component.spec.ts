import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCourseComponent } from './comp-course.component';

describe('CompCourseComponent', () => {
  let component: CompCourseComponent;
  let fixture: ComponentFixture<CompCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
