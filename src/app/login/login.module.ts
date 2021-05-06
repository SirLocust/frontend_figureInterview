import { ShareModule } from './../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    ShareModule
  ],
  exports: [
    PageLoginComponent,
  ]
})
export class LoginModule { }
