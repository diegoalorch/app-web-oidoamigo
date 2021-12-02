import { Component, OnInit } from '@angular/core';
import { Accesos } from 'src/app/model/accesos';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  idrol! : number;
  acceso : Accesos[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let arrIdrol = JSON.parse(this.users);
    this.idrol = arrIdrol["idrol"];
    this.getModules();
  }

  getModules(){
    this.authService.modulesService(this.idrol).subscribe((data)=>{
      this.acceso = data;
      console.log("Aca ta: "+ this.acceso);
    })
  }

}
