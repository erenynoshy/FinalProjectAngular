import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTasksolutionComponent } from './edit-tasksolution.component';

describe('EditTasksolutionComponent', () => {
  let component: EditTasksolutionComponent;
  let fixture: ComponentFixture<EditTasksolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTasksolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTasksolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
