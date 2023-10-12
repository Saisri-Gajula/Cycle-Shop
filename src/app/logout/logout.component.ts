import { Component } from '@angular/core';
import { CycleService } from '../app.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private logoutService: CycleService, private router  : Router) {}

  logout() {
    console.log(localStorage.getItem('token'));
    this.logoutService.clearToken();
    console.log(localStorage.getItem('token'));
    this.router.navigate(['/login']);

  }
}
