import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePacientesComponent } from './reporte-pacientes.component';

describe('ReportePacientesComponent', () => {
  let component: ReportePacientesComponent;
  let fixture: ComponentFixture<ReportePacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
