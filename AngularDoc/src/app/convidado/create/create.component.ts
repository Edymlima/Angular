import { ConvidadoService } from './../services/convidado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private convidadoService: ConvidadoService  ) { }

  frmConvidado: FormGroup;

  ngOnInit(): void {

    this.frmConvidado = this.fb.group({
      id: [''],
      nome: ['']
    });
  }

  salveConvidado() {
    this.convidadoService.create(this.frmConvidado.value).subscribe(res => {
      console.log('ok!')
      this.router.navigateByUrl('/head')

  });

}

