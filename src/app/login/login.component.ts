import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSidebarJsService } from '../cargar-sidebar-js.service';
import { AuthService } from '../service/auth.service';
import { Users } from '../model/users';
import { DatosPsicologo } from '../model/datos_psicologos';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Users();
  psicologo = new DatosPsicologo();

  constructor(private authService: AuthService,private router: Router, private toastrService: ToastrService, private _CargaSidebar: CargarSidebarJsService) { 
    _CargaSidebar.Carga_Sidebar(["button"]);
  }
  ngOnInit(): void {
  }

  signIn() {
    this.authService.singIn(this.usuario).subscribe(
      res => {
        sessionStorage.setItem('token', res.accessToken);
        let datos = JSON.parse(atob(res.accessToken.split(".")[1]));
        this.psicologo.idusuario = datos.usuario.idusuario
        this.psicologo.username = datos.usuario.username
        this.psicologo.idrol = datos.usuario.idrol
        this.psicologo.idpsicologo = datos.usuario.idpsicologo
        sessionStorage.setItem('docentes', JSON.stringify(this.psicologo));
        console.log('Hi');
        this.router.navigate(['/modulos']);
        this.toastrService.success('Hi '+ this.usuario.username+' Grate to have you back...!');
      },
      err =>{
        this.toastrService.error('Sorry, Username or Password Incorrect');
      }
    )
  }

}
