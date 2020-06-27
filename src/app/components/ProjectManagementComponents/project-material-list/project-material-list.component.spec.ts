import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaterialListComponent } from './project-material-list.component';

describe('ProjectMaterialListComponent', () => {
  let component: ProjectMaterialListComponent;
  let fixture: ComponentFixture<ProjectMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
