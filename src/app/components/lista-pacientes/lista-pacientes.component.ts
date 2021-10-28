import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/model/paciente';
import { Psicologos } from 'src/app/model/psicologos';
import { PacienteService } from 'src/app/service/paciente.service';
import { PsicologosService } from 'src/app/service/psicologos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  p: number = 1;
  autoSelect : number =-1;
  p2: number = 1;

  constructor(private router : Router, private pacienteService : PacienteService, private psicologoService : PsicologosService) { 
    
  }
  
  // *************************
  listar_pacientes : Paciente[]=[];
  listar_datos : Paciente[]=[];
  listar_datos2 : Paciente[]=[];
  mostrar_psicologo : Psicologos[]=[];
  psico : Psicologos[] = [];

  psicologoo : Psicologos = new Psicologos();
  derivar : Paciente = new Paciente();
  eliminar : Paciente[]=[];

  // *********************
  idpaciente! : number;
  asignados_pacientes : Paciente[]=[];
  asignados : Paciente[]=[];

  ngOnInit(): void {

    this.listarpacientesnoAignados();
    this.lista_psicologo();
    this.listarpacientesAsignados();

  }

  listarpacientesnoAignados(){
    this.pacienteService.getAllPaciente().subscribe(
      (data) => {
        this.listar_pacientes = data;
        console.log(this.listar_pacientes);
      }
    )
  }

  listar_datos_paciente(pacii : number){
    this.pacienteService.getPacienteID(pacii).subscribe(
      (data) => {
        this.listar_datos = data;
        console.log(this.listar_datos);
      }
    )
  }

  lista_psicologo(){
    this.psicologoService.getPsicologoNomApl().subscribe(
      (data) => {
        this.psico = data;
        console.log(this.psico);
      }
    )
  }

  listar_datos_paciente2(pac : number){
    this.pacienteService.getPacienteID(pac).subscribe(
      (data) => {
        this.listar_datos2 = data;
        console.log(this.listar_datos);
      }
    )
  }

  mostrardatospsicologo(psi : number){
    console.log(psi)
    this.psicologoService.getListaSelectPsicologo(psi).subscribe(
      (data)=>{
        this.mostrar_psicologo = data;
        console.log(psi)
      }
    )
  }

  derivarPaciente(){
    const Swall = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    const Swalll = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 25px">¿Estas Seguro de la Asignación?</b>',
        html: '<span style="font-size: 18px">No habra marcha atras...!</span>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#52A820',
        cancelButtonColor: '#d33',
        cancelButtonText : 'Cancelar Asignación',
        confirmButtonText: 'Si Realizar la Asignación',
        iconColor : '#7B0000'
      }).then((result) => {
        if (result.isConfirmed) {
          this.listar_datos2[0].idpsicologo = this.autoSelect;
          Swall.fire(
            'Se Asigno Correctamente!',
            'Ahora el Paciente tiene un Psicologo Asignado...',
            'success'
          )
          this.pacienteService.derivarPaciente(this.listar_datos2[0]).subscribe((data) => {
            this.derivar = data;
            console.log(this.derivar);
            this.listarpacientesAsignados();
            this.ngOnInit();
          })
          console.log(this.listar_datos2[0]);
        } 
        
        else if(result.dismiss === Swal.DismissReason.cancel){

          Swalll.fire(
            'Asignación Cancelada',
            'La Asignación se ha cancelado. Regresando a lista de Pacientes no Asignados...',
            'error',
          )
        }
      })
  }

  eliminarConsulta(eli : Paciente){
    const swal0 = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    const swal1 = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    Swal.fire({
      title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 25px">¿Deseas Eliminar la Consulta?</b>',
      html: '<span style="font-size: 18px">Si elimina la consulta no se podra recuperar...!</span>',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar la Consulta',
      cancelButtonText: 'No Eliminar la Consulta',
      confirmButtonColor: '#52A820',
      cancelButtonColor: '#d33',
      iconColor : '#7B0000'
    }).then((result) => {
      if (result.isConfirmed) {
        swal0.fire(
          'Eliminado Exitoso!',
          'Se ha Eliminado la Consulta con Exito...',
          'success'
        )
        this.pacienteService.deleteConsulta(eli).subscribe(data =>{
          this.eliminar = this.eliminar.filter(r=>r!==eli);
          this.listarpacientesnoAignados();
          this.listarpacientesAsignados();
        })
  
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swal1.fire(
          'Acción Cancelada',
          'Se cancelo la opción de Eliminar la Consulta del Paciente...',
          'error'
        )
      }
    })
  }

  // ****************************

  listarpacientesAsignados(){

    this.pacienteService.getAsignadosPaciente().subscribe(
      (data) => {
        this.asignados_pacientes = data;
        console.log(this.asignados_pacientes);
      }
    )
  }

  mostraPaciente2(mostra : number){
    this.pacienteService.getPacienteID(mostra).subscribe(
      (data) => {
        this.asignados = data;
        console.log(this.asignados);
      }
    )
  }

  designarPaciente(idpaciente : number){

    let paciente : Paciente = new Paciente;
    paciente.idpaciente = idpaciente;
    paciente.idpsicologo = null;
    this.pacienteService.derivarPaciente(paciente).subscribe(
      () =>{
      this.listarpacientesAsignados();
      this.listarpacientesnoAignados();
    })
  }
}

