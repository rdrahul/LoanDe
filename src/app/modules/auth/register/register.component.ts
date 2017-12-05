import { Component, OnInit } from '@angular/core';
import { Validators , FormControl , FormBuilder , FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup ;
  
  constructor( private _fb : FormBuilder , private authService : AuthService , private router : Router ) { 
    
    this.registerForm = _fb.group({
        'name' : [ null , Validators.compose([ Validators.required ,  Validators.minLength(3) , Validators.maxLength(30) ])],
        'email' : [ null , Validators.compose( [ Validators.required , Validators.email] ) ],
        'password': [ null ,Validators.required ],
        'confirm': [ null , Validators.compose([ Validators.required , this.validatePasswordConfirmation.bind(this) ] )]
    });

  }

  validatePasswordConfirmation(control: FormControl): any {
    if(this.registerForm) {
      return control.value === this.registerForm.get('password').value ? null : { notSame: true }
    }
  }

  ngOnInit() {
  }

  register(){
    let data = this.registerForm.value;
    console.log( data );
    this.authService.register( data )
      .subscribe( (result) => {
        console.log( "Res " ,result );
        this.router.navigate(['/login']);
      },
      (error) =>{
        console.log( error);
      }  
    );

  }

}
