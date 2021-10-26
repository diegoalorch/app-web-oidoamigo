import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = 'http://localhost:3000/api/auth/paciente';

  constructor(private http : HttpClient) { }

  //  LISTA DE TODOS LOS PACIENTES
  getAllPaciente() : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/lista-pacientes');
  }

  //  LISTA DE PACIENTES SELECCIONADO
  getPacienteID(id:number) : Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url + '/' + id);
  }

  //  CREATE REGISTRO CONSULTA
  createConsulta(paciente : Paciente) {
    return this.http.post<Paciente[]>(this.url+'/create',paciente);
  }

}
