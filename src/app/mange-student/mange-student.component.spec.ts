import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeStudentComponent } from './mange-student.component';

describe('MangeStudentComponent', () => {
  let component: MangeStudentComponent;
  let fixture: ComponentFixture<MangeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
