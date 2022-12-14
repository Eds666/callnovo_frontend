import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],

  exports: [
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    SharedModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
