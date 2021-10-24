import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'animate.css';

@Component({
  selector: 'app-paciente-consulta',
  templateUrl: './paciente-consulta.component.html',
  styleUrls: ['./paciente-consulta.component.css']
})
export class PacienteConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  registrarconsulta(){
    console.log("Funciono bien")
    Swal.fire({
      title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
      // showClass: {
      //   popup: 'animate__animated animate__fadeInDown'
      // },
      // hideClass: {
      //   popup: 'animate__animated animate__fadeOutUp'
      // },
      icon: 'success',
      html: '<span style="font-size: 22px">Se ha Registrado tú Consulta, lo contactaremos en breve...!</span>',
      // imageUrl: 'https://unsplash.it/400/200',
      // imageWidth: 400,
      // imageHeight: 200,
      // imageAlt: 'Custom image',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#52A820',
      iconColor: '#52A820'
    })
  }
}
