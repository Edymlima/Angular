import { ConvidadoService } from './../services/convidado.service';
import { Convidados } from './../model/convidado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listas : Convidados[] = [];


  constructor(private convidadoService: ConvidadoService) { }

  ngOnInit(): void {

    this.convidadoService.getAll().subscribe((data : Convidados[])=>{
      console.log(data);
      this.listas = data;
    })

  }

}
