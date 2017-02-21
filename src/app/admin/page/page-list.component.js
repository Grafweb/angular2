System.register(['@angular/core', './shared/page.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, page_service_1;
    var PageListAdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_service_1_1) {
                page_service_1 = page_service_1_1;
            }],
        execute: function() {
            //import { Profile, LoginService }  from './../../login/shared/login.service';
            PageListAdminComponent = (function () {
                function PageListAdminComponent(pageService) {
                    this.pageService = pageService;
                }
                PageListAdminComponent.prototype.getAllPage = function () {
                    console.info("wykonałem getAllPage");
                    this.allPage = this.pageService.getListPages();
                };
                PageListAdminComponent.prototype.ngOnInit = function () {
                    //this.getAllPage();
                };
                PageListAdminComponent = __decorate([
                    core_1.Component({
                        selector: 'page-add-admin',
                        templateUrl: 'src/app/admin/page/page-list.component.html',
                        providers: [page_service_1.PageService]
                    }), 
                    __metadata('design:paramtypes', [page_service_1.PageService])
                ], PageListAdminComponent);
                return PageListAdminComponent;
            }());
            exports_1("PageListAdminComponent", PageListAdminComponent);
        }
    }
});
