import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstructorsComponent } from './edit-instructors.component';

describe('EditInstructorsComponent', () => {
  let component: EditInstructorsComponent;
  let fixture: ComponentFixture<EditInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
