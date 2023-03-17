import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginMovilComponent } from './movil/login-movil/login-movil.component';
import { LoginWebComponent } from './web/login-web/login-web.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderWebComponent } from './web/header-web/header-web.component';
import { DashboardWebComponent } from './web/dashboard-web/dashboard-web.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NewAlarmComponent } from './web/new-alarm/new-alarm.component';
import {MatSelectModule} from '@angular/material/select';
import { NewDispositivoComponent } from './web/new-dispositivo/new-dispositivo.component'
import {MatInputModule} from '@angular/material/input';
import { EditAlarmaComponent } from './web/edit-alarma/edit-alarma.component';
import { EditDispositivoComponent } from './web/edit-dispositivo/edit-dispositivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginMovilComponent,
    LoginWebComponent,
    HeaderWebComponent,
    DashboardWebComponent,
    NewAlarmComponent,
    NewDispositivoComponent,
    EditAlarmaComponent,
    EditDispositivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
