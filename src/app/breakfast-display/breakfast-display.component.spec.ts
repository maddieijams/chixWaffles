import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastDisplayComponent } from './breakfast-display.component';

describe('BreakfastDisplayComponent', () => {
  let component: BreakfastDisplayComponent;
  let fixture: ComponentFixture<BreakfastDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
