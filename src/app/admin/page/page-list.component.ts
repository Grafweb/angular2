import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page, PageData }  from './shared/page.interface';
import { PageService }  from './shared/page.service';
//import { Profile, LoginService }  from './../../login/shared/login.service';

@Component({
    selector: 'page-add-admin',
    templateUrl: 'src/app/admin/page/page-list.component.html',
    providers: [PageService]
})
export class PageAddAdminComponent implements OnInit {

    site:Page = new PageData(); 
    
    constructor(private pageService: PageService) { }

    onSubmit(formSite: NgForm) {
        console.dir(formSite);
        console.log("formSite.value " + formSite.value);  // { first: '', last: '' }
        console.log("formSite.value " + formSite.valid);  // false

        this.pageService.sendPage(formSite.value);
    }

    ngOnInit(): void {
        console.info("ngOnInit()");
    }

}