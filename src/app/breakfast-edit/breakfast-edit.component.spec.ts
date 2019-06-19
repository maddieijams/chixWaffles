import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastEditComponent } from './breakfast-edit.component';

describe('BreakfastEditComponent', () => {
  let component: BreakfastEditComponent;
  let fixture: ComponentFixture<BreakfastEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
