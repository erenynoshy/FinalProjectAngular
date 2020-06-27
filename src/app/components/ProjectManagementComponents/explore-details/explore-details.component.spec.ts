import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDetailsComponent } from './explore-details.component';

describe('ExploreDetailsComponent', () => {
  let component: ExploreDetailsComponent;
  let fixture: ComponentFixture<ExploreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
