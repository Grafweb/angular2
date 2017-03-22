import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Page, PageData }  from './shared/page.interface';
import { Page }  from './../../../../src/app/admin/page/shared/page.interface';
import { PageService }  from './shared/page.service';
import { Observable } from 'rxjs/Observable';
import { LogsService }  from './../shared/log.service';
//import { Profile, LoginService }  from './../../login/shared/login.service';


@Component({
    selector: 'page-add-admin',
    templateUrl: 'src/app/admin/page/page-list.component.html',
    providers: [PageService]
})
export class PageListAdminComponent implements OnInit  {

    //site:Page = new PageData();

    allPage: Array<Page>;

    getAllPage() {
        console.info("wykonałem getAllPage");
        return this.pageService.getListPages()
        .subscribe( data => {
            this.allPage = data;
            console.info("data" + data);
            console.dir(data);
            },
                err => this.logsService.logError(err)
            );
    }

    ngOnInit(): void {
        this.getAllPage();
    }
    
    constructor(private pageService: PageService, private logsService: LogsService) { }

}