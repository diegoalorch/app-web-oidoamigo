import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://app-web-oidoamigo.herokuapp.com/api/auth/users/update/';

  constructor(private http: HttpClient) { }

  update(usuario:Users){
    return this.http.put<Users>(this.url+usuario.idusuario , usuario);
  }
}
