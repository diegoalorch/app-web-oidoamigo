import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from 'src/app/model/paciente';
import { Sesion } from 'src/app/model/sesion';
import { Reportes } from 'src/app/model/reportes';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-paciente-asignado',
  templateUrl: './paciente-asignado.component.html',
  styleUrls: ['./paciente-asignado.component.css']
})
export class PacienteAsignadoComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  idpsi!: number;
  idpac!: number;
  pac: Paciente[] = [];
  ses1: Sesion[] = [];
  ses2: Sesion[] = [];
  ses3: Sesion[] = [];
  sesion : Sesion = new Sesion();
  reportes : Reportes = new Reportes();



  constructor(private router: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    let arrPsi = JSON.parse(this.users);
    this.idpsi = arrPsi["idpsicologo"];
    this.idpac = arrPsi["idusuario"];
    this.pacientegoInfo();
    this.readSesion1();
    this.readSesion2();
    this.readSesion3();
  }

  pacientegoInfo(){
    this.pacienteService.getListaPacienteInput(this.idpsi).subscribe((data)=>{
      this.pac = data;
    })
  }

  readSesion1(){
    this.pacienteService.readsesion1(this.idpac).subscribe((data)=>{
      this.ses1 = data;
    })
  }

  readSesion2(){
    this.pacienteService.readsesion2(this.idpac).subscribe((data)=>{
      this.ses2 = data;
    })
  }

  readSesion3(){
    this.pacienteService.readsesion3(this.idpac).subscribe((data)=>{
      this.ses3 = data;
    })
  }

  createSesio1(){
    this.sesion.idpsicologo = this.idpsi;
    this.sesion.idpaciente = this.idpac;
    this.pacienteService.createsesion1(this.sesion).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createSesio2(){
    this.sesion.idpsicologo = this.idpsi;
    this.sesion.idpaciente = this.idpac;
    this.pacienteService.createsesion2(this.sesion).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createSesio3(){
    this.sesion.idpsicologo = this.idpsi;
    this.sesion.idpaciente = this.idpac;
    this.pacienteService.createsesion3(this.sesion).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createReporte1(){
    this.reportes.idpsicologo = this.idpsi;
    this.reportes.idpaciente = this.idpac;
    this.pacienteService.createreporte1(this.reportes).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createReporte2(){
    this.reportes.idpsicologo = this.idpsi;
    this.reportes.idpaciente = this.idpac;
    this.pacienteService.createreporte2(this.reportes).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createReporte3(){
    this.reportes.idpsicologo = this.idpsi;
    this.reportes.idpaciente = this.idpac;
    this.pacienteService.createreporte3(this.reportes).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }

  createReportef(){
    this.reportes.idpsicologo = this.idpsi;
    this.reportes.idpaciente = this.idpac;
    this.pacienteService.createreportef(this.reportes).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.sesion.idcronograma +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }



}
