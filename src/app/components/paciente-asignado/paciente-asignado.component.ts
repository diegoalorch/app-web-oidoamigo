import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-paciente-asignado',
  templateUrl: './paciente-asignado.component.html',
  styleUrls: ['./paciente-asignado.component.css']
})
export class PacienteAsignadoComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  idpsi!: number;
  pac: Paciente[] = [];



  constructor(private router: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    let arrPsi = JSON.parse(this.users);
    this.idpsi = arrPsi["idpsicologo"];
    this.pacientegoInfo();
  }

  pacientegoInfo(){
    this.pacienteService.getListaPacienteInput(this.idpsi).subscribe((data)=>{
      this.pac = data;
    })
  }



}
