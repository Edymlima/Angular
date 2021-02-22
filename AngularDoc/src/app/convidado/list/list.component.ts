import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listas = [
    { id: 1, nome:"edy"},
    { id: 2, nome:"lu"},
    { id: 3, nome:"miguel"}
];


  constructor() { }

  ngOnInit(): void {
  }

}
