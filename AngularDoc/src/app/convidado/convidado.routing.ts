import { HeadComponent } from './head/head.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',
    component:HeadComponent },
];

export const ConvidadoRoutes = RouterModule.forChild(routes);
