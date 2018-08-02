import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola009Component } from './hola009.component';

describe('Hola009Component', () => {
  let component: Hola009Component;
  let fixture: ComponentFixture<Hola009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
