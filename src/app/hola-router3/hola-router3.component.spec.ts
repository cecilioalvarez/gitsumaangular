import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter3Component } from './hola-router3.component';

describe('HolaRouter3Component', () => {
  let component: HolaRouter3Component;
  let fixture: ComponentFixture<HolaRouter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
