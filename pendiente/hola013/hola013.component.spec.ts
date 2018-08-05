import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola013Component } from './hola013.component';

describe('Hola013Component', () => {
  let component: Hola013Component;
  let fixture: ComponentFixture<Hola013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
