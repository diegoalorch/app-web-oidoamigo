import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPsicologoComponent } from './components/agregar-psicologo/agregar-psicologo.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ListaPsicologosComponent } from './components/lista-psicologos/lista-psicologos.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { PacienteAsignadoComponent } from './components/paciente-asignado/paciente-asignado.component';
import { PacienteConsultaComponent } from './components/paciente-consulta/paciente-consulta.component';
import { ReportePacientesComponent } from './components/reporte-pacientes/reporte-pacientes.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routesHome: Routes = [

  {path : '', component: PacienteConsultaComponent}, //paciente consulta
  {path : 'sidebar', component: SidebarComponent},
  {path : 'login', component: LoginComponent }, //login
  {path : 'modulos', component: ModulosComponent}, //modulos
  {path : 'agregar-psicologo', component: AgregarPsicologoComponent}, //agregar psicologo
  {path : 'configuracion', component: ConfiguracionComponent}, //configuracion
  {path : 'reporte-paciente', component: ReportePacientesComponent}, //reporte paciente
  {path : 'lista-psicologos', component: ListaPsicologosComponent}, //lista de psicologos
  {path : 'lista-pacientes', component: ListaPacientesComponent}, //lista de pacientes
  {path : 'paciente-asignado', component: PacienteAsignadoComponent}, //paciente asiganado
];

const routes: Routes = [

  {path : 'login', component: LoginComponent }, //login
  {path : 'sidebar', component: SidebarComponent, children: routesHome }, //sidebar
  {path : 'modulos', component: ModulosComponent}, //modulos
  {path : '', component: PacienteConsultaComponent}, //paciente consulta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  SidebarComponent,
  LoginComponent,
  ModulosComponent
];
