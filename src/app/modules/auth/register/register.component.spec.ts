import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpModule } from "@angular/http";
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { MatInputModule , MatFormFieldModule   } from "@angular/material";
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import {  AuthRoutingModule } from "../auth.routing.module";
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { HttpModule,Http } from '@angular/http';
import { UserService } from "../../../services/user.service";
import { AuthService } from "../../../services/auth.service";
import { AppModule } from "../../../app.module";
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent , LoginComponent , LogoutComponent ],
      imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        BootstrapGridModule,
        HttpModule,
        AppModule
      ],
      providers : [UserService, AuthService ,Http]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
