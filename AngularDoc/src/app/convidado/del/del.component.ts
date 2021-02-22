import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  selectId : number = 0;
  constructor(private parametro : ActivatedRoute) { }

  ngOnInit(): void {
    this.parametro.params.subscribe(id =>{
      this.selectId = id.id;
    })
  }

}
