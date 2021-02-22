import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectId: number = 0;

  convidado = {};

  constructor(private parametro : ActivatedRoute) { }

  ngOnInit(): void {
      this.parametro.params.subscribe(id => {
       this.selectId = id.id;
      })
  }

}
