import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Profile, LoginService }  from './../../login/shared/login.service';

@Component({
    selector: 'page-add-admin',
    templateUrl: 'src/app/admin/page/page-add.component.html',
    providers: []
})
export class PageAddAdminComponent implements OnInit {

    site:any; 
    
    constructor() {
    }

    onSubmit(formSite: NgForm) {
        console.dir(formSite);
        console.log("formSite.value " + formSite.value);  // { first: '', last: '' }
        console.log("formSite.value " + formSite.valid);  // false
    }

    ngOnInit(): void {
        console.info("ngOnInit()");
    }

}