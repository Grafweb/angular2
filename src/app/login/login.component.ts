import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { Login } from './login';

@Component({
    selector: 'toh-login',
    // template: "ds"
    templateUrl: 'src/app/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent {

    login : Object;
    
    constructor ( private LoginService: LoginService) {
        this.login = new Login();
    }

    submit(data) {
        console.dir(this.login);
        this.LoginService.sendHeroes(this.login);
    }

}