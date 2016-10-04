import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginRegisterComponent } from './login/login-register.component';

// import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    HttpModule,
                    routing ],
    declarations: [ AppComponent,
                    HomeComponent, 
                    LoginComponent, 
                    LoginRegisterComponent, 
                    AdminComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }