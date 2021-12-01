import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { PacienteConsultaComponent } from './components/paciente-consulta/paciente-consulta.component';
import { PacienteAsignadoComponent } from './components/paciente-asignado/paciente-asignado.component';
import { AgregarPsicologoComponent } from './components/agregar-psicologo/agregar-psicologo.component';
import { ListaPsicologosComponent } from './components/lista-psicologos/lista-psicologos.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ReportePacientesComponent } from './components/reporte-pacientes/reporte-pacientes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { IonicModule } from '@ionic/angular'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PacientesAtendidosPsicologoComponent } from './components/pacientes-atendidos-psicologo/pacientes-atendidos-psicologo.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ModulosComponent,
    PacienteConsultaComponent,
    PacienteAsignadoComponent,
    AgregarPsicologoComponent,
    ListaPsicologosComponent,
    ListaPacientesComponent,
    ReportePacientesComponent,
    ConfiguracionComponent,
    PacientesAtendidosPsicologoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    NgbModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
