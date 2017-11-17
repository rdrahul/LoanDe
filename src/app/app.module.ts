import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule ,MatCardModule , MatListModule , MatIconModule , MatButtonModule,
  MatProgressBarModule

} from '@angular/material';
import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
import { AppShellModule } from "@angular/app-shell";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app.routinig.module";

import { UserService } from "./services/user.service";
import { SocketService } from "./services/socket.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    HttpModule,
    MatProgressBarModule,
    AppShellModule.runtime(),
    AppRoutingModule
  ],
  providers: [ UserService, SocketService ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
