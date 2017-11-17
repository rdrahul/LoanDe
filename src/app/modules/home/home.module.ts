import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule ,
  MatCardModule , 
  MatListModule , 
  MatIconModule , 
  MatButtonModule,
  MatProgressBarModule
} from '@angular/material';

import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { HttpModule } from "@angular/http"; 

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent ],
  providers : []
})
export class HomeModule { }
