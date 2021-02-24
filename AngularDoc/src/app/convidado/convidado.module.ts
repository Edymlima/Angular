import { SharedModule } from './../shared/service/shared.module';
import { MaterialModule } from './../shared/material-module';
import { ConvidadoRoutes } from './convidado.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { DelComponent } from './del/del.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeadComponent, ListComponent, EditComponent, HomeComponent, DelComponent, CreateComponent],
  imports: [
    CommonModule,
    ConvidadoRoutes,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class ConvidadoModule { }
