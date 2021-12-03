import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologos } from '../model/psicologos';

@Injectable({
  providedIn: 'root'
})
export class PsicologosService {

  url = 'https://app-web-oidoamigo.herokuapp.com/api/psicologos';

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

  getPsicologoId(id : number): Observable<Psicologos[]>{
    return this.http.get<Psicologos[]>(this.url + '/lista-psicologos-nom-apl/' + id);
  }
}
