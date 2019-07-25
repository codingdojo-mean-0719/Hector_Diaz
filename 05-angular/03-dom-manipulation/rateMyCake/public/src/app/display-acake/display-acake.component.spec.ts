import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayACakeComponent } from './display-acake.component';

describe('DisplayACakeComponent', () => {
  let component: DisplayACakeComponent;
  let fixture: ComponentFixture<DisplayACakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayACakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayACakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
