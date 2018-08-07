import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter4Component } from './hola-router4.component';

describe('HolaRouter4Component', () => {
  let component: HolaRouter4Component;
  let fixture: ComponentFixture<HolaRouter4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
