import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologos } from '../model/psicologos';

@Injectable({
  providedIn: 'root'
})
export class PsicologosService {

  url = 'http://localhost:3000/api/auth/psicologos';

  constructor(private http : HttpClient) { }

  getAllPsicologo() : Observable<Psicologos[]>{
    return this.http.get<Psicologos[]>(this.url + '/lista-psicologos');
  }

  getPsicologoNomApl(): Observable<Psicologos[]>{
    return this.http.get<Psicologos[]>(this.url + '/lista-psicologos-nom-ap');
  }

  getListaSelectPsicologo(id : number): Observable<Psicologos[]>{
    return this.http.get<Psicologos[]>(this.url + '/lista-psicologos-select/' + id);
  }

  createPsicologo(psicologo:Psicologos){
    return this.http.post<Psicologos[]>(this.url+'/create', psicologo);   
  }
}
