import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material-module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      {path:'', component:DashboardComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'convidado', loadChildren: ()=>import('./convidado/convidado.module').then(m=> m.ConvidadoModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
