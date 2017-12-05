import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators , FormBuilder  } from "@angular/forms";

//services
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup ;

  constructor( private _fb : FormBuilder , private _authService : AuthService ) {
    this.loginForm = _fb.group({
      'email' : [null , Validators.compose( [Validators.required , Validators.email] ) ],
      'password':[null , Validators.compose(  [Validators.required , 
                                                  Validators.minLength(4),
                                                  Validators.maxLength(500) ] )]
    });

    console.log(this.loginForm);
   }

  ngOnInit() {


  }

  login(){
    
    
    this._authService.login( this.loginForm.value ) .subscribe( ( response ) => {
      console.log(response);
    } ,(err) => {
      console.log("err " , err);
      switch( err.status){
        case 403 : console.log("username and credentials wrong");break;
        case 404 : console.log("User not found");break;
        default : console.log("some error occurred");
      }
    }) ;
  
  }

}
