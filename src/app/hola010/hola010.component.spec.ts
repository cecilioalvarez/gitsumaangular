import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola010Component } from './hola010.component';

describe('Hola010Component', () => {
  let component: Hola010Component;
  let fixture: ComponentFixture<Hola010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
