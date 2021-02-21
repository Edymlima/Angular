import { ConvidadoModule } from './convidado/convidado.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConvidadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
