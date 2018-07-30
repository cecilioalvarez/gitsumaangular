import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola004Component } from './hola004.component';

describe('Hola004Component', () => {
  let component: Hola004Component;
  let fixture: ComponentFixture<Hola004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
