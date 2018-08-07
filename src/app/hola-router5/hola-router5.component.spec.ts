import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter5Component } from './hola-router5.component';

describe('HolaRouter5Component', () => {
  let component: HolaRouter5Component;
  let fixture: ComponentFixture<HolaRouter5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
