import { Component, OnInit, Directive } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS } from '@angular/http';
import { HeroService } from './shared/login-register.service';
import { LoginRegister } from './login-register';


@Component({
    selector: 'login-register',
    // template: "register"
    templateUrl: 'src/app/login/login-register.component.html',
    providers: [HeroService]
})
export class LoginRegisterComponent { 

constructor ( private heroService: HeroService) {
    // this.name = "";
    // this.surname = "";
}

    login = new LoginRegister();

    onSubmit() {
     //Http.post();   
     console.info("wykonałem" + this.login.username);
     this.heroService.sendtHeroes(this.login);
    }
}