import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola003Component } from './hola003.component';

describe('Hola003Component', () => {
  let component: Hola003Component;
  let fixture: ComponentFixture<Hola003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hola003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
