import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  nome: string = 'Valor do nome passado via binding';
  nomeProperty: string = 'Nome atribuído a propriedade';

  constructor() { }

  ngOnInit(): void {
  }

}
