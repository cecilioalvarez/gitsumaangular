import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola005Component } from './hola005.component';

describe('Hola005Component', () => {
  let component: Hola005Component;
  let fixture: ComponentFixture<Hola005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
