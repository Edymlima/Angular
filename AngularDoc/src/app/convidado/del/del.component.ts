import { ConvidadoService } from './../services/convidado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  selectId : number = 0;
  constructor(
    private parametro : ActivatedRoute,
    private router: Router,
    private convidadoService: ConvidadoService

    ) { }

  ngOnInit(): void {
    this.parametro.params.subscribe(id =>{
      this.selectId = id.id;
    })

  }

  deleteConvidado(){
    this.convidadoService.delete(this.selectId).subscribe(dados=>{
      alert("convidado codigo = " + this.selectId + " excluído! "),
      this.router.navigateByUrl('home');
  });
  }


}
