import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola017Component } from './hola017.component';

describe('Hola017Component', () => {
  let component: Hola017Component;
  let fixture: ComponentFixture<Hola017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
