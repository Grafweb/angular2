import { Component, OnInit } from '@angular/core';
import { UserToken }  from './../login/shared/user-token';
import { LoginService }  from './../login/shared/login.service';

@Component({
    selector: 'toh-login',
    // template: "ds"
    templateUrl: 'src/app/admin/admin.component.html',
    providers: [UserToken, LoginService]
})
export class AdminComponent {

    constructor ( ) {
    }

}