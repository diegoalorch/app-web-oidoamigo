import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api/personas';

  //  LISTAR TODAS LAS PERSONAS
  getAllPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + '/lista-personas');
  }

  //  LISTAR PERSONAS POR SELECCIÓN
  getPersonaID(id:number): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url+ '/' +id);
  }

  //  CREAR PERSONA
  createPersona(persona : Persona){
    return this.http.post<Persona[]>(this.url + '/create', persona);
  }
  
}
