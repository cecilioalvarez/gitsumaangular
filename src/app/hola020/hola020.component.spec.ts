import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola020Component } from './hola020.component';

describe('Hola020Component', () => {
  let component: Hola020Component;
  let fixture: ComponentFixture<Hola020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
