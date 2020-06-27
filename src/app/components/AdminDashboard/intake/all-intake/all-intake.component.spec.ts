import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIntakeComponent } from './all-intake.component';

describe('AllIntakeComponent', () => {
  let component: AllIntakeComponent;
  let fixture: ComponentFixture<AllIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
