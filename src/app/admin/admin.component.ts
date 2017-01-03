import { Component, OnInit } from '@angular/core';

import { HeaderAdminComponent } from './header/header.component';
import { LoginService }  from './../login/shared/login.service';

@Component({
    selector: 'toh-login',
    // template: "ds"
    templateUrl: 'src/app/admin/admin.component.html',
    providers: [LoginService]
})
export class AdminComponent {

    constructor ( ) {
    }

}