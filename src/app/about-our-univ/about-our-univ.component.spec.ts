import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurUnivComponent } from './about-our-univ.component';

describe('AboutOurUnivComponent', () => {
  let component: AboutOurUnivComponent;
  let fixture: ComponentFixture<AboutOurUnivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurUnivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
