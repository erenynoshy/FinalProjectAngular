import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabboratorItemComponent } from './colabborator-item.component';

describe('ColabboratorItemComponent', () => {
  let component: ColabboratorItemComponent;
  let fixture: ComponentFixture<ColabboratorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabboratorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabboratorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
