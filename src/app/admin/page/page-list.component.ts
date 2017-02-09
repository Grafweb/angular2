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
export class PageListAdminComponent {

    site:Page = new PageData(); 
    
    constructor(private pageService: PageService) { }

}