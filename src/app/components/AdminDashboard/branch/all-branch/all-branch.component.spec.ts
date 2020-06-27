import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBranchComponent } from './all-branch.component';

describe('AllBranchComponent', () => {
  let component: AllBranchComponent;
  let fixture: ComponentFixture<AllBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
