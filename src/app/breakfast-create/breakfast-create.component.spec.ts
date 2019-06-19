import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastCreateComponent } from './breakfast-create.component';

describe('BreakfastCreateComponent', () => {
  let component: BreakfastCreateComponent;
  let fixture: ComponentFixture<BreakfastCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
