import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAcadWorksComponent } from './why-acad-works.component';

describe('WhyAcadWorksComponent', () => {
  let component: WhyAcadWorksComponent;
  let fixture: ComponentFixture<WhyAcadWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAcadWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAcadWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
