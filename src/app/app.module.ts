import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LogoutComponent } from './logout/logout.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ReturnComponent } from './return/return.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterpageComponent,
    LogoutComponent,
    AdministratorComponent,
    ReturnComponent,
    ButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-85oimlugzuirx8ul.us.auth0.com',
      clientId: '1aBv6QH3tQDJLSgPbZW2Z2BllfHHqRc4',
      authorizationParams: {
        redirect_uri: window.location.origin+"/home"
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
