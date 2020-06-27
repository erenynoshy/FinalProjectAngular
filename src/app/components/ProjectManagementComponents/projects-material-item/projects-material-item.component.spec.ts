import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMaterialItemComponent } from './projects-material-item.component';

describe('ProjectsMaterialItemComponent', () => {
  let component: ProjectsMaterialItemComponent;
  let fixture: ComponentFixture<ProjectsMaterialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMaterialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMaterialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
