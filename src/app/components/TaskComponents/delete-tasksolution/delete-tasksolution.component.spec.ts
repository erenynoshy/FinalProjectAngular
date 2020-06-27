import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTasksolutionComponent } from './delete-tasksolution.component';

describe('DeleteTasksolutionComponent', () => {
  let component: DeleteTasksolutionComponent;
  let fixture: ComponentFixture<DeleteTasksolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTasksolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTasksolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
