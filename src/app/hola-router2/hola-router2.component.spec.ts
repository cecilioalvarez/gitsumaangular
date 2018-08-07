import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter2Component } from './hola-router2.component';

describe('HolaRouter2Component', () => {
  let component: HolaRouter2Component;
  let fixture: ComponentFixture<HolaRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
