import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page }  from './../../../../src/app/admin/page/shared/page.interface';
import { PageService }  from './shared/page.service';
//import { Profile, LoginService }  from './../../login/shared/login.service';

@Component({
    selector: 'page-add-admin',
    templateUrl: 'src/app/admin/page/page-add.component.html',
    providers: [PageService]
})
export class PageAddAdminComponent implements OnInit {

    site:Page = <Page>{}; 
    
    constructor(private pageService: PageService) { }

    onSubmit(formSite: NgForm) {
        console.dir(formSite);
        console.log("formSite.value " + formSite.value);  // { first: '', last: '' }
        console.log("formSite.value " + formSite.valid);  // false

        //this.pageService.sendPage(formSite.value);
    }    

    onChange(event) {
        console.info("event");
        console.dir(event);
        //$event.target.files[0]
    }

    ngOnInit(): void {
        console.info("ngOnInit()");
    }

}