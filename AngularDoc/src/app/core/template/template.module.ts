import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from 'src/app/shared/material-module';
import { AppRoutingModule } from 'src/app/app-routing.module';



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
