import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAsignadoComponent } from './paciente-asignado.component';

describe('PacienteAsignadoComponent', () => {
  let component: PacienteAsignadoComponent;
  let fixture: ComponentFixture<PacienteAsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteAsignadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
