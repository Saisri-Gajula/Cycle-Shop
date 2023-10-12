import { Component } from '@angular/core';
import { CycleService } from './app.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cycle-shop';

 
  isUserAdmin():boolean {

    const userRole = localStorage.getItem('role');

    return userRole == 'ROLE_ADMIN'

  }
}

