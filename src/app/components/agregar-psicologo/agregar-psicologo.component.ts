import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Psicologos } from 'src/app/model/psicologos';
import { PsicologosService } from 'src/app/service/psicologos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-psicologo',
  templateUrl: './agregar-psicologo.component.html',
  styleUrls: ['./agregar-psicologo.component.css']
})
export class AgregarPsicologoComponent implements OnInit {



  psicologo : Psicologos = new Psicologos();
  

  constructor(private router:Router, private psicologoService: PsicologosService) {  }

  ngOnInit(): void {
    
  }

  createPsicologo(){
    this.psicologoService.createPsicologo(this.psicologo).subscribe(data =>{
      Swal.fire({title: 'Saved!',text: 'All Right '+ this.psicologo.nombres +' Has been successfully register!',icon: 'success',showConfirmButton: false,timer: 1800,});
      this.ngOnInit();
    })
  }



  

}
