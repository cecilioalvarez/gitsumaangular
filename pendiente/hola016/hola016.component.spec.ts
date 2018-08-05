import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola016Component } from './hola016.component';

describe('Hola016Component', () => {
  let component: Hola016Component;
  let fixture: ComponentFixture<Hola016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
