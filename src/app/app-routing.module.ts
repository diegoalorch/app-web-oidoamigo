import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './components/modulos/modulos.component';
import { PacienteAsignadoComponent } from './components/paciente-asignado/paciente-asignado.component';
import { PacienteConsultaComponent } from './components/paciente-consulta/paciente-consulta.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [

  {path : 'sidebar', component: SidebarComponent },
  {path : 'login', component: LoginComponent },
  {path : 'modulos', component: ModulosComponent},
  {path : '', component: PacienteConsultaComponent},
  {path : 'paciente-asignado', component: PacienteAsignadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
