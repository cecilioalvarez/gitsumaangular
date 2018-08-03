import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola019Component } from './hola019.component';

describe('Hola019Component', () => {
  let component: Hola019Component;
  let fixture: ComponentFixture<Hola019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
