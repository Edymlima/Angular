import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../shared/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class TemplateModule { }
