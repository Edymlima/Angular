import { CreateComponent } from './components/create/create.component';
import { DelComponent } from './components/del/del.component';
import { HomeComponent } from './template/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { HeadComponent } from './template/head/head.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', component:HeadComponent },
  { path:'create', component: CreateComponent },
  { path:'edit/:id', component:EditComponent },
  { path:'del/:id', component:DelComponent },
  { path:'home', component:HomeComponent },
];

export const ConvidadoRoutesModule = RouterModule.forChild(routes);
