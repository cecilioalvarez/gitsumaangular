import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter7Component } from './hola-router7.component';

describe('HolaRouter7Component', () => {
  let component: HolaRouter7Component;
  let fixture: ComponentFixture<HolaRouter7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
