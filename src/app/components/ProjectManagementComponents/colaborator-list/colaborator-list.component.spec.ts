import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorListComponent } from './colaborator-list.component';

describe('ColaboratorListComponent', () => {
  let component: ColaboratorListComponent;
  let fixture: ComponentFixture<ColaboratorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboratorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
