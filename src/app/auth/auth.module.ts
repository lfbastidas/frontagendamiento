import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SigninComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthroutingModule } from './auth.routing';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SigninComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthroutingModule
  ]
})
export class AuthModule { }
