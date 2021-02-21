import { ConvidadoRoutes } from './convidado.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HeadComponent, ListComponent, EditComponent, HomeComponent],
  imports: [
    CommonModule,
    ConvidadoRoutes
  ]
})
export class ConvidadoModule { }
