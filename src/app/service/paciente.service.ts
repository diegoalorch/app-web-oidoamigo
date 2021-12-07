import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';
import { Sesion } from '../model/sesion';
import { Reportes } from '../model/reportes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = 'https://app-web-oidoamigo.herokuapp.com/api/paciente';

  constructor(private http : HttpClient) { }

  //  LISTA DE TODOS LOS PACIENTES NO ASIGNADOS
  getAllPaciente() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/lista-pacientes-no-asignados');
  }

  //  LISTA DE TODOS LOS PACIENTES ASIGNADOS
  getAsignadosPaciente() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/lista-pacientes-asignados');
  }

  //  LISTA DE PACIENTES SELECCIONADO
  getPacienteID(id:number) : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/lista-pacientes/' + id);
  }

  //  CREATE REGISTRO CONSULTA
  createConsulta(paciente : Paciente) {
    return this.http.post<Paciente[]>(this.url+'/agregar-consulta',paciente);
  }

  // LISTAR DATOS DEL PACIENTE
  getListaPacienteInput(id:number) : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/paciente-asignado/'+id);
  }

  derivarPaciente(derivar : Paciente){
    return this.http.put<Paciente>(this.url + '/derivar-paciente/' + derivar.idpaciente, derivar);
  }

  deleteConsulta(eliminar:Paciente){
    return this.http.delete<Paciente>(this.url + '/eliminar-consulta/' + eliminar.idpaciente);
  } 

  // LISTAR DATOS DE LA SESION1
  readsesion1(id:number) : Observable<Sesion[]>{
    return this.http.get<Sesion[]>(this.url + '/sesion1/'+id);
  }

  // LISTAR DATOS DE LA SESION2
  readsesion2(id:number) : Observable<Sesion[]>{
    return this.http.get<Sesion[]>(this.url + '/sesion2/'+id);
  }

  // LISTAR DATOS DE LA SESION3
  readsesion3(id:number) : Observable<Sesion[]>{
    return this.http.get<Sesion[]>(this.url + '/sesion3/'+id);
  }

   //  CREATE SESION1
   createsesion1(ses : Sesion) {
    return this.http.post<Sesion[]>(this.url+'/create-sesion1',ses);
  }

  //  CREATE SESION12
  createsesion2(ses : Sesion) {
    return this.http.post<Sesion[]>(this.url+'/create-sesion2',ses);
  }

  //  CREATE SESION3
  createsesion3(ses : Sesion) {
    return this.http.post<Sesion[]>(this.url+'/create-sesion3',ses);
  }

  //  CREATE REPORTE 1
  createreporte1(rep : Reportes) {
    return this.http.post<Reportes[]>(this.url+'/create-reporte1',rep);
  }

  //  CREATE REPORTE 2
  createreporte2(rep : Reportes) {
    return this.http.post<Reportes[]>(this.url+'/create-reporte1',rep);
  }

  //  CREATE REPORTE 3
  createreporte3(rep : Reportes) {
    return this.http.post<Reportes[]>(this.url+'/create-reporte1',rep);
  }

  //  CREATE REPORTE Final
  createreportef(rep : Reportes) {
    return this.http.post<Reportes[]>(this.url+'/create-reporte1',rep);
  }
}
