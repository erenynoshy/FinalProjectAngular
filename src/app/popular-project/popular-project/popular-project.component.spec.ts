import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProjectComponent } from './popular-project.component';

describe('PopularProjectComponent', () => {
  let component: PopularProjectComponent;
  let fixture: ComponentFixture<PopularProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
