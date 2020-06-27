import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollKeyComponent } from './enroll-key.component';

describe('EnrollKeyComponent', () => {
  let component: EnrollKeyComponent;
  let fixture: ComponentFixture<EnrollKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
