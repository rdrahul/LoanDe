import { Component, OnInit } from '@angular/core';
import { SocketService } from "../../../services/socket.service";
import { Message } from "../../../models/message.model";
import { FormBuilder , FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageRecieved ;
  messages:Array<Message> = [] ;
  chatwith;
  form : FormGroup;


  constructor( private _socketService : SocketService,
                private _formBuilder : FormBuilder
  
  ) { 
    
    _socketService.on('message' , (data ) => {
        this.messages = [data["message"]];
    });

  }

  ngOnInit( ) {
    this.form = this._formBuilder.group({
      inputmessage : [ '' , [Validators.required , Validators.minLength(1)] ]
    });
    this._socketService.emit("save-message" , { message : "I am initialized" } );
  }

  formSubmit(){
    console.log("submitted ", this.form.value);
  }

}
