import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAtendidosPsicologoComponent } from './pacientes-atendidos-psicologo.component';

describe('PacientesAtendidosPsicologoComponent', () => {
  let component: PacientesAtendidosPsicologoComponent;
  let fixture: ComponentFixture<PacientesAtendidosPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesAtendidosPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesAtendidosPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
