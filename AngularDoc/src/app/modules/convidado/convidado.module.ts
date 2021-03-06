import { SharedModule } from './../../shared/shared.module';
import { DelComponent } from './components/del/del.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from './../../shared/material-module';
import { ConvidadoRoutesModule } from './convidado.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
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
  ],
  entryComponents: [CreateComponent],
})
export class ConvidadoModule { }
