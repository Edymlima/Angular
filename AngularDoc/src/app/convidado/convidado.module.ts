import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DelComponent } from './components/del/del.component';
import { SharedModule } from './../shared/service/shared.module';
import { MaterialModule } from './../shared/material-module';
import { ConvidadoRoutesModule } from './convidado.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './template/head/head.component';
import { HomeComponent } from './template/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeadComponent,
    ListComponent,
    CreateComponent,
    HomeComponent,
    EditComponent,
    DelComponent
    ],
  imports: [
    CommonModule,
    ConvidadoRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class ConvidadoModule { }
