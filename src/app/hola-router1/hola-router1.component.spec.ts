import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaRouter1Component } from './hola-router1.component';

describe('HolaRouter1Component', () => {
  let component: HolaRouter1Component;
  let fixture: ComponentFixture<HolaRouter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaRouter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaRouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
