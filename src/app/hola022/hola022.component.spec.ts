import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola022Component } from './hola022.component';

describe('Hola022Component', () => {
  let component: Hola022Component;
  let fixture: ComponentFixture<Hola022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
