import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages-routing.module';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutiingModule } from './auth/auth-routiing.module';


const routes: Routes = [
  // path: '/dashboard' PagesRoutiiing
  // path: '/auth' AuthRoutiiing

  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutiingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
