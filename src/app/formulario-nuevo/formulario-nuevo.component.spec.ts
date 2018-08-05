import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoComponent } from './formulario-nuevo.component';

describe('FormularioNuevoComponent', () => {
  let component: FormularioNuevoComponent;
  let fixture: ComponentFixture<FormularioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
