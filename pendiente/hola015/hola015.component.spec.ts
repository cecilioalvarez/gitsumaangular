import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola015Component } from './hola015.component';

describe('Hola015Component', () => {
  let component: Hola015Component;
  let fixture: ComponentFixture<Hola015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
