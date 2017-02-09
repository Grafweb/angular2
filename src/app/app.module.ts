import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, RequestOptions }    from '@angular/http';

import { AppComponent }   from './app.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PageAddAdminComponent } from './admin/page/page-add.component';
import { PageListAdminComponent } from './admin/page/page-list.component';
import { HeaderAdminComponent } from './admin/header/header.component';
import { LoginRegisterComponent } from './login/login-register.component';
import { HeadersRequestOptions } from './login/shared/headers-default';
import { CanActivateTeam } from './login/shared/can-active.service';
import { UserToken }  from './login/shared/user-token';
import { LoginService }  from './login/shared/login.service';
import { LogsService }  from './admin/shared/log.service';
import { PageService }  from './admin/page/shared/page.service';
// import { LoginComponent } from './login/login.component'; 
import { routing } from './app.routing';

//http://blog.angular-university.io/angular2-ngmodule/
//http://stackoverflow.com/questions/34464108/angular2-set-headers-for-every-request

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    HttpModule,
                    routing ],
    declarations: [ AppComponent,
                    HomeComponent, 
                    LoginComponent, 
                    LoginRegisterComponent, 
                    AdminComponent,
                    HeaderAdminComponent,
                    PageAddAdminComponent,
                    PageListAdminComponent
                     ],
    providers: [ {provide: RequestOptions, useClass: HeadersRequestOptions }, 
                UserToken,
                LoginService,
                CanActivateTeam,
                LogsService,
                PageService
                ],     
    bootstrap:    [ AppComponent ]
})

//providers: [ {provide: RequestOptions, useClass: HeadersRequestOptions }  ],

export class AppModule { }