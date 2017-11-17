import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

import { ChatRouteModule } from './chat.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChatRouteModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
