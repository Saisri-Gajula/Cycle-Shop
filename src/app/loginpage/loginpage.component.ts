import { Component } from '@angular/core';

import { AuthService } from '../AuthService'; 

import { Router } from '@angular/router';

 
@Component({
  selector: 'app-login-form',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginFormComponent {
username : string = "";
password : string = "";

 

 

constructor( private authService :AuthService,private router : Router){}

 

login() : void
{
  this.authService.login(this.username, this.password).subscribe();
  this.router.navigate(['/home']);
}
}