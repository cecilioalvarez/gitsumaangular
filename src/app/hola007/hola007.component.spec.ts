import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola007Component } from './hola007.component';

describe('Hola007Component', () => {
  let component: Hola007Component;
  let fixture: ComponentFixture<Hola007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
