import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

import { ReactiveFormsModule , FormsModule } from "@angular/forms";

import { ChatRouteModule } from './chat.routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule , MatIconModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ChatRouteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
