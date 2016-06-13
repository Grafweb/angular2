import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login/login-register.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App 2</h1>
              <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  //{ path: '/dashboard', component: DashboardComponent }, // , useAsDefault: true}, // coming soon
  { path: '/login', name: 'Login',  component: LoginComponent },
  { path: '/login-register', name: 'LoginRegister', component: LoginRegisterComponent }
])

export class AppComponent { }