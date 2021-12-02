import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSidebarJsService } from '../cargar-sidebar-js.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Accesos } from '../model/accesos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  idrol! : number;
  acceso : Accesos[] = [];

  constructor(private atuhService:AuthService, private router: Router, private _CargaSidebar: CargarSidebarJsService, private toastrService: ToastrService) { 
    _CargaSidebar.Carga_Sidebar(["sidebar"]);
  }

  ngOnInit(): void {
    let arrIdrol = JSON.parse(this.users);
    this.idrol = arrIdrol["idrol"];
    this.getModules();
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    this.toastrService.info('Al done! Hope you have an excellent day');
    sessionStorage.removeItem('docentes');
    this.router.navigate(['/login']);
  }

  getModules(){
    this.atuhService.modulesService(this.idrol).subscribe((data)=>{
      this.acceso = data;
      console.log("Aca ta: "+ this.acceso);
    })
  }

}
