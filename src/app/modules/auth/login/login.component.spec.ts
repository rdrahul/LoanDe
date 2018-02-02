import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatInputModule , MatFormFieldModule   } from "@angular/material";
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import {  AuthRoutingModule } from "../auth.routing.module";
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from '../register/register.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
