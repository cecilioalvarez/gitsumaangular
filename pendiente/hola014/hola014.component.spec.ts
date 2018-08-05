import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola014Component } from './hola014.component';

describe('Hola014Component', () => {
  let component: Hola014Component;
  let fixture: ComponentFixture<Hola014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
