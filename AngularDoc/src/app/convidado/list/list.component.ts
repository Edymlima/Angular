import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listas = [
    { nome:"edy"},
    { nome:"lu"},
    { nome:"miguel"}
];


  constructor() { }

  ngOnInit(): void {
  }

}
