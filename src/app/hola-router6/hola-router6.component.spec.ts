import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter6Component } from './hola-router6.component';

describe('HolaRouter6Component', () => {
  let component: HolaRouter6Component;
  let fixture: ComponentFixture<HolaRouter6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
