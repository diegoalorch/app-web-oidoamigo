import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

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
  getListaPacienteInput() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '');
  }

  derivarPaciente(derivar : Paciente){
    return this.http.put<Paciente>(this.url + '/derivar-paciente/' + derivar.idpaciente, derivar);
  }

  deleteConsulta(eliminar:Paciente){
    return this.http.delete<Paciente>(this.url + '/eliminar-consulta/' + eliminar.idpaciente);
  } 
}
