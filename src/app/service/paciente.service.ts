import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';
import { Sesion } from '../model/sesion';

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

   //  CREATE REGISTRO CONSULTA
   createsesion1(ses : Sesion) {
    return this.http.post<Sesion[]>(this.url+'/create-sesion1',Sesion);
  }
}
