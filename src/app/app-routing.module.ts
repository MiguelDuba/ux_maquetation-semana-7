import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWebComponent } from './web/dashboard-web/dashboard-web.component';
import { EditAlarmaComponent } from './web/edit-alarma/edit-alarma.component';
import { EditDispositivoComponent } from './web/edit-dispositivo/edit-dispositivo.component';
import { LoginWebComponent } from './web/login-web/login-web.component';
import { NewAlarmComponent } from './web/new-alarm/new-alarm.component';
import { NewDispositivoComponent } from './web/new-dispositivo/new-dispositivo.component';

const routes: Routes = [
  {path:'', redirectTo: 'web/login', pathMatch: 'full'},
  {path:'web/login', component: LoginWebComponent},
  {path:'web/dashboard', component: DashboardWebComponent},
  {path:'web/newAlarm', component: NewAlarmComponent},
  {path:'web/newDispositivo', component: NewDispositivoComponent},
  {path:'web/editDispositivo', component: EditDispositivoComponent},
  {path:'web/editAlarm', component: EditAlarmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
