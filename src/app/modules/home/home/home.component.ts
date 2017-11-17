import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service"
import { User } from "../../../models/User.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people : Array<User>;
  constructor( private _userService : UserService ) {
      
   }

  ngOnInit() {

    this._userService.getUsers( )
      .subscribe( (users : Array<User>) => {
        this.people = users["users"];
      });
  
  }

}
