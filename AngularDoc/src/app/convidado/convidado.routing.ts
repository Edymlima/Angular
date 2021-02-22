import { CreateComponent } from './create/create.component';
import { DelComponent } from './del/del.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { HeadComponent } from './head/head.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', component:HeadComponent },
  { path:'create', component: CreateComponent },
  { path:'edit/:id', component:EditComponent },
  { path:'del/:id', component:DelComponent },
  { path:'home', component:HomeComponent },
];

export const ConvidadoRoutes = RouterModule.forChild(routes);
