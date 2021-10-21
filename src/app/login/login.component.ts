import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSidebarJsService } from '../cargar-sidebar-js.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _CargaSidebar: CargarSidebarJsService) { 
    _CargaSidebar.Carga_Sidebar(["button"]);
  }
  ngOnInit(): void {
  }

}
