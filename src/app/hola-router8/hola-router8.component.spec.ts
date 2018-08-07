import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter8Component } from './hola-router8.component';

describe('HolaRouter8Component', () => {
  let component: HolaRouter8Component;
  let fixture: ComponentFixture<HolaRouter8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
