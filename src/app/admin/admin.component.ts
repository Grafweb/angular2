import { Component, OnInit } from '@angular/core';
import { UserToken }  from './../login/shared/user-token';


@Component({
    selector: 'toh-login',
    // template: "ds"
    templateUrl: 'src/app/admin/admin.component.html',
    providers: [UserToken]
})
export class AdminComponent {

    constructor ( ) {
    }

}