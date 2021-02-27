import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './../template/components/container/container.component';
import { CreateComponent } from './components/create/create.component';
import { DelComponent } from './components/del/del.component';
import { EditComponent } from './components/edit/edit.component';
import { Routes, RouterModule } from '@angular/router';
import { listenerCount } from 'process';

const routes: Routes = [

  { path:'', component: ListComponent },
  { path:'create', component: CreateComponent },
  { path:'edit/:id', component:EditComponent },
  { path:'del/:id', component:DelComponent },
  { path:'list', component:ListComponent },

];

export const ConvidadoRoutesModule = RouterModule.forChild(routes);
