import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola001Component } from './hola001.component';

describe('Hola001Component', () => {
  let component: Hola001Component;
  let fixture: ComponentFixture<Hola001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
