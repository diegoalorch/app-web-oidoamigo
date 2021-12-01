import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('usuario')}`;
  iduser! : number;
  user: Users = new Users();
  usuario = new Users();
  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    let arrUser = JSON.parse(this.users);
    this.iduser = arrUser["idusuario"];
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

}
