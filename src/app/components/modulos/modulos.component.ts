import { Component, OnInit } from '@angular/core';
import { Accesos } from 'src/app/model/accesos';
import { Psicologos } from 'src/app/model/psicologos';
import { AuthService } from 'src/app/service/auth.service';
import { PsicologosService } from 'src/app/service/psicologos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  idrol! : number;
  idpsi!: number;
  acceso : Accesos[] = [];
  psicolo : Psicologos[] = [];

  constructor(private router: Router, private authService: AuthService, private psicologoService: PsicologosService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    let arrIdrol = JSON.parse(this.users);
    this.idrol = arrIdrol["idrol"];
    this.idpsi = arrIdrol["idpsicologo"];
    this.getModules();
    this.psicologoInfo();
  }

  getModules(){
    this.authService.modulesService(this.idrol).subscribe((data)=>{
      this.acceso = data;
      console.log("Aca ta: "+ this.acceso);
    })
  }

  psicologoInfo(){
    this.psicologoService.getPsicologoId(this.idpsi).subscribe((data)=>{
      this.psicolo = data;
    })
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    this.toastrService.info('Al done! Hope you have an excellent day');
    sessionStorage.removeItem('docentes');
    this.router.navigate(['/login']);
  }

}
