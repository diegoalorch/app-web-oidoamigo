import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSidebarJsService } from '../cargar-sidebar-js.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private _CargaSidebar: CargarSidebarJsService) { 
    _CargaSidebar.Carga_Sidebar(["sidebar"]);
  }

  ngOnInit(): void {
  }

}
