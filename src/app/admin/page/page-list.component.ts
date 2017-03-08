import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page, PageData }  from './shared/page.interface';
import { PageService }  from './shared/page.service';
import { Observable } from 'rxjs/Observable';
//import { Profile, LoginService }  from './../../login/shared/login.service';


@Component({
    selector: 'page-add-admin',
    templateUrl: 'src/app/admin/page/page-list.component.html',
    providers: [PageService]
})
export class PageListAdminComponent implements OnInit  {

    //site:Page = new PageData();

    allPage;

    getAllPage():void {
        console.info("wykonałem getAllPage");
        this.allPage =  this.pageService.getListPages();
    }

    ngOnInit(): void {
        this.getAllPage();
    }
    
    constructor(private pageService: PageService) { }

}