import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';

import { AdministratorComponent } from './administrator/administrator.component';

const routes: Routes = [
  {path : 'cart' , component:CartComponent},
  {path : 'home', component:HomeComponent},
  {path : 'login', component:LoginFormComponent},
  {path: 'logout', component:LogoutComponent},
  {path:  'admin',component:AdministratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
