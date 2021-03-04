import { ListComponent } from './modules/convidado/components/list/list.component';

import { DashboardComponent } from '../app/modules/dashboard/dashboard.component';
import { MaterialModule } from './shared/material-module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './core/template/components/container/container.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [

      {
        path: '',
        component: ContainerComponent,
        children: [
          {
            path: 'dashboard',
            component:DashboardComponent
        },
          {
              path: 'convidado',
              loadChildren:()=>import('../app/modules/convidado/convidado.module')
              .then(m=>m.ConvidadoModule)
          },
          {
            path:'**', component:NotFoundComponent
          }
        ]
      }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
