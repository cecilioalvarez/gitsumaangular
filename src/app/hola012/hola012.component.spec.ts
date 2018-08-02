import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola012Component } from './hola012.component';

describe('Hola012Component', () => {
  let component: Hola012Component;
  let fixture: ComponentFixture<Hola012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
