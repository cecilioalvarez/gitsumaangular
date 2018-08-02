import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola006Component } from './hola006.component';

describe('Hola006Component', () => {
  let component: Hola006Component;
  let fixture: ComponentFixture<Hola006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
