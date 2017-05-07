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

    public site:object = {};

    public PhotoName:string = "";

    
    constructor(private pageService: PageService) { }

    onSubmit(formSite: NgForm) {
        //formSite.value.foto = this.PhotoName;
        formSite.value.foto = [];//formSite.value.foto.push(this.PhotoName)
        formSite.value.foto.push(this.PhotoName);
        console.dir(formSite);
        console.log("formSite.value " + formSite.value);  // { first: '', last: '' }
        console.log("formSite.value " + formSite.valid);  // false
        // let merged = { ...formSite.value, file: this.PhotoName };
        // console.log("merged " + merged);
        // console.dir(merged);
        //let merged = { ...foo, ...bar, ...baz };
        this.pageService.sendPage(formSite.value)
            .subscribe( data => data );
    }    

    onChange(event) {
        console.info("event");
        console.dir(event);
        this.PhotoName = event.target.files[0].name;
        //$event.target.files[0]
    }

    ngOnInit(): void {
        console.info("ngOnInit()");
    }

}