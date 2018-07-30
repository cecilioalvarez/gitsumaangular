import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola002Component } from './hola002.component';

describe('Hola002Component', () => {
  let component: Hola002Component;
  let fixture: ComponentFixture<Hola002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
