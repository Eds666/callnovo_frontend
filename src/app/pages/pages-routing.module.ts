import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { DetalleAssetsComponent } from './assests/detalle-assets/detalle-assets.component';
import { EditarAssetsComponent } from './assests/editar-assets/editar-assets.component';
import { ListaAssetsComponent } from './assests/lista-assets/lista-assets.component';
import { NuevoAssetsComponent } from './assests/nuevo-assets/nuevo-assets.component';
import { DetalleEmployeeComponent } from './employees/detalle-employee/detalle-employee.component';
import { EditarEmployeeComponent } from './employees/editar-employee/editar-employee.component';
import { ListaEmployeeComponent } from './employees/lista-employee/lista-employee.component';
import { NuevoEmployeeComponent } from './employees/nuevo-employee/nuevo-employee.component';

const routes: Routes = [
  {
    path: 'dashboard/',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },

      { path: 'detalle-assets', component: DetalleAssetsComponent },
      { path: 'editar-assets', component: EditarAssetsComponent },
      { path: 'lista-assets', component: ListaAssetsComponent },
      { path: 'nuevo-assets', component: NuevoAssetsComponent },

      { path: 'detalle-employee', component: DetalleEmployeeComponent },
      { path: 'editar-employee', component: EditarEmployeeComponent },
      { path: 'lista-employee', component: ListaEmployeeComponent },
      { path: 'nuevo-employee', component: NuevoEmployeeComponent },

      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
