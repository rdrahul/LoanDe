import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable()
export class SocketService {

  url = 'http://localhost:3000';
  socket;
  constructor() { 
    this.socket = io( this.url );
  }

  public on( eventName : any , callback: any ){

    //if socket is initialized
    if( this.socket){

        //call the socket's on method pass the event name and callback
        this.socket.on( eventName ,  ( data )=>{
          
            callback(data);
        
        });

    }
  }

  public emit( eventName:any , data ){

      if( this.socket){

        this.socket.emit( eventName , data );

      }
  }

}
