import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CargarSidebarJsService } from 'src/app/cargar-sidebar-js.service';
import { Psicologos } from 'src/app/model/psicologos';
import { PsicologosService } from 'src/app/service/psicologos.service';

@Component({
  selector: 'app-lista-psicologos',
  templateUrl: './lista-psicologos.component.html',
  styleUrls: ['./lista-psicologos.component.css']
})
export class ListaPsicologosComponent implements OnInit {

  psicologoslist : Psicologos[]=[];
  p: number = 1;

  closeResult = '';

  constructor(private router : Router, private psicologoService : PsicologosService, private modalService : NgbModal) { 
  
  }

  ngOnInit(): void {

    this.listarPsicologos();
  }


  listarPsicologos(){
    this.psicologoService.getAllPsicologo().subscribe(
      (data)=>{
        this.psicologoslist = data;
        console.log(this.psicologoslist);
      }
    )
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

