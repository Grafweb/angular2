import { Component, OnInit, Directive } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {HeroService} from './shared/login-register.service';


@Component({
    selector: 'login-register',
    // template: "register"
    templateUrl: 'src/app/login/login-register.component.html'
})
export class LoginRegisterComponent {

constructor ( private heroService: HeroService) {

}

    onSubmit(data) {
     //Http.post();   
     this.heroService.sendtHeroes(data);
    }
}