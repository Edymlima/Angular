import { ConvidadoService } from '../../services/convidado.service';
import { Convidados } from '../../model/convidado';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface GithubApi {
  items: Convidados[];
  total_count: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'acao'];
  dataSource = new MatTableDataSource<Convidados>();
  acaoid : number;
  isDone = false ;
  isLoading = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private convidadoService: ConvidadoService) { }

  ngOnInit(): void {

    this.convidadoService.getAll().subscribe((data : Convidados[])=>{
      console.log(data);
      this.dataSource = new MatTableDataSource<Convidados>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.validaIsDone(data)
      this.isLoading = false;
    })

  }

  validaIsDone(data){
    if (data.length > 0){
      this.isDone = true;
    }else{
      this.isDone = false;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getIdTable(id : number){
    this.acaoid = id;
  }

}
