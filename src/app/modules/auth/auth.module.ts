import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MatInputModule , MatFormFieldModule   } from "@angular/material";
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import {  AuthRoutingModule } from "./auth.routing.module";
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    BootstrapGridModule
  ],
  declarations: [LoginComponent, LogoutComponent, RegisterComponent]

})
export class AuthModule { }
