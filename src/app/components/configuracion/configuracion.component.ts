import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { PsicologosService } from 'src/app/service/psicologos.service';
import { Psicologos } from 'src/app/model/psicologos';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  iduser! : number;
  idpsi!: number;
  user: Users = new Users();
  usuario = new Users();
  psicolo : Psicologos[] = [];
  constructor(private userService: UserService, private toastrService: ToastrService, private psicologoService: PsicologosService) { }

  ngOnInit(): void {
    let arrUser = JSON.parse(this.users);
    this.iduser = arrUser["idusuario"];
    let arrPsi = JSON.parse(this.users);
    this.idpsi = arrUser["idpsicologo"];
    this.psicologoInfo();
  }

  updateUser(user: Users){
    user.idusuario = this.iduser;
    this.userService.update(user).subscribe((data) => {
      this.user = data;
      this.toastrService.success('User Modified Succesfuly...!');
    }, err =>{
      this.toastrService.error('Sorry, Password Incorrect');
    })
  }

  psicologoInfo(){
    this.psicologoService.getPsicologoId(this.idpsi).subscribe((data)=>{
      this.psicolo = data;
    })
  }

}
