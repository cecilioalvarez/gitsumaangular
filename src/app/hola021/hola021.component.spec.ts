import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola021Component } from './hola021.component';

describe('Hola021Component', () => {
  let component: Hola021Component;
  let fixture: ComponentFixture<Hola021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
