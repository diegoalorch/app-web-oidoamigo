import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarSidebarJsService } from '../cargar-sidebar-js.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private _CargaSidebar: CargarSidebarJsService, private toastrService: ToastrService) { 
    _CargaSidebar.Carga_Sidebar(["sidebar"]);
  }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('token');
    this.toastrService.info('Al done! Hope you have an excellent day');
    sessionStorage.removeItem('docentes');
    this.router.navigate(['/login']);
  }

}
