import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialBoxComponent } from './matrial-box.component';

describe('MatrialBoxComponent', () => {
  let component: MatrialBoxComponent;
  let fixture: ComponentFixture<MatrialBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrialBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
