import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola008Component } from './hola008.component';

describe('Hola008Component', () => {
  let component: Hola008Component;
  let fixture: ComponentFixture<Hola008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
