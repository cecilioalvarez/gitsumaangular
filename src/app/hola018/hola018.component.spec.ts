import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola018Component } from './hola018.component';

describe('Hola018Component', () => {
  let component: Hola018Component;
  let fixture: ComponentFixture<Hola018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
