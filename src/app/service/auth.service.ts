import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { Accesos } from '../model/accesos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = 'https://app-web-oidoamigo.herokuapp.com/api/auth/login';
private Url = 'https://app-web-oidoamigo.herokuapp.com/api/auth/users/access/';

  constructor(private http: HttpClient) { }

  singIn(usuario:Users){
    return this.http.post<any>(this.url, usuario);
  }

  modulesService(id: number):Observable<Accesos[]>{
    return this.http.get<Accesos[]>(this.Url+id);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  loggedIn(){
    return !!sessionStorage.getItem('token');
  }

}
