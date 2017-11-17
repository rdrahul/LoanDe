import { Component, OnInit } from '@angular/core';
import { SocketService } from "../../../services/socket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageRecieved ;
  constructor( private _socketService : SocketService  ) { 
    console.log("HREllle");
    _socketService.on('message' , (data ) => {
        this.messageRecieved = data["message"];
    })

  }

  ngOnInit( ) {
    this._socketService.emit("save-message" , { message : "I am initialized" } );
  }

}
