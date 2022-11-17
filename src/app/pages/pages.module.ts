import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { DetalleEmployeeComponent } from './employees/detalle-employee/detalle-employee.component';
import { EditarEmployeeComponent } from './employees/editar-employee/editar-employee.component';
import { ListaEmployeeComponent } from './employees/lista-employee/lista-employee.component';
import { NuevoEmployeeComponent } from './employees/nuevo-employee/nuevo-employee.component';
import { NuevoAssetsComponent } from './assests/nuevo-assets/nuevo-assets.component';
import { DetalleAssetsComponent } from './assests/detalle-assets/detalle-assets.component';
import { EditarAssetsComponent } from './assests/editar-assets/editar-assets.component';
import { ListaAssetsComponent } from './assests/lista-assets/lista-assets.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    DetalleEmployeeComponent,
    EditarEmployeeComponent,
    ListaEmployeeComponent,
    NuevoEmployeeComponent,
    NuevoAssetsComponent,
    DetalleAssetsComponent,
    EditarAssetsComponent,
    ListaAssetsComponent,
    PagesComponent
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    DetalleEmployeeComponent,
    EditarEmployeeComponent,
    ListaEmployeeComponent,
    NuevoEmployeeComponent,
    NuevoAssetsComponent,
    DetalleAssetsComponent,
    EditarAssetsComponent,
    ListaAssetsComponent,
    PagesComponent
  ],

  imports: [
    SharedModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class PagesModule { }
