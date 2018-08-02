import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola011Component } from './hola011.component';

describe('Hola011Component', () => {
  let component: Hola011Component;
  let fixture: ComponentFixture<Hola011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
