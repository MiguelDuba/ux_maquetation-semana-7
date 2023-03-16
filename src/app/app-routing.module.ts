import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMovilComponent } from './movil/login-movil/login-movil.component';
import { DashboardWebComponent } from './web/dashboard-web/dashboard-web.component';
import { LoginWebComponent } from './web/login-web/login-web.component';

const routes: Routes = [
  {path:'movil/login', component: LoginMovilComponent},
  {path:'web/login', component: LoginWebComponent},
  {path:'web/dashboard', component: DashboardWebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
