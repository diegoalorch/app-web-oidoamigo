import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'animate.css';
import { Paciente } from 'src/app/model/paciente';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/service/paciente.service';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-paciente-consulta',
  templateUrl: './paciente-consulta.component.html',
  styleUrls: ['./paciente-consulta.component.css']
})
export class PacienteConsultaComponent implements OnInit {

  // VARIABLE PARA AGREGAR
  paciente : Paciente = new Paciente();  //  persona : Persona = new Persona();


  constructor(private router : Router, private pacienteService : PacienteService, private personaService : PersonaService) { }

  ngOnInit(): void {
  }
  
  registrarconsulta(){
    console.log("Funciono bien");
    console.log(this.paciente);
    this.pacienteService.createConsulta(this.paciente).subscribe(data=>{
      console.log("Se guardo la data consulta");
      this.ngOnInit();
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
        icon: 'success',
        html: '<span style="font-size: 22px">Se ha Registrado tú Consulta, lo contactaremos en breve...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#52A820',
        iconColor: '#52A820'
        // showClass: {
        //   popup: 'animate__animated animate__fadeInDown'
        // },
        // hideClass: {
        //   popup: 'animate__animated animate__fadeOutUp'
        // },
        // imageUrl: 'https://unsplash.it/400/200',
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image',
      });
    })
  }
}
