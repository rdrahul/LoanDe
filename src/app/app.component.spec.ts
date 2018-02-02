import { TestBed, async  } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { MatToolbarModule ,MatCardModule , MatListModule , MatIconModule , MatButtonModule,
  MatProgressBarModule

} from '@angular/material';

//import { HomeComponent } from './components/home/home.component';
import { AppShellModule } from "@angular/app-shell";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app.routinig.module";

import { UserService } from "./services/user.service";
import { SocketService } from "./services/socket.service";
import { HttpService } from "./services/httpservice.service";
import { AuthService } from "./services/auth.service";

import { BootstrapGridModule } from 'ng2-bootstrap-grid';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,  
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        HttpModule,
        BrowserAnimationsModule,
        BootstrapGridModule,
        MatProgressBarModule,
        AppShellModule.runtime(),
        AppRoutingModule
      ],
      providers: [  {provide: APP_BASE_HREF, useValue: '/' } ,HttpService,
        UserService,
        SocketService , 
        AuthService ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Loan De');
  }));


});
