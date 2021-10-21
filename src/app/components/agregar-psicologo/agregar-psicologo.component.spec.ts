import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPsicologoComponent } from './agregar-psicologo.component';

describe('AgregarPsicologoComponent', () => {
  let component: AgregarPsicologoComponent;
  let fixture: ComponentFixture<AgregarPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
