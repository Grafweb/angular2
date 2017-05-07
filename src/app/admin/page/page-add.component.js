System.register(["@angular/core", "./shared/page.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, page_service_1, PageAddAdminComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_service_1_1) {
                page_service_1 = page_service_1_1;
            }
        ],
        execute: function () {
            PageAddAdminComponent = (function () {
                function PageAddAdminComponent(pageService) {
                    this.pageService = pageService;
                    this.site = {};
                    this.PhotoName = "";
                }
                PageAddAdminComponent.prototype.onSubmit = function (formSite) {
                    //formSite.value.foto = this.PhotoName;
                    formSite.value.foto = []; //formSite.value.foto.push(this.PhotoName)
                    formSite.value.foto.push(this.PhotoName);
                    console.dir(formSite);
                    console.log("formSite.value " + formSite.value); // { first: '', last: '' }
                    console.log("formSite.value " + formSite.valid); // false
                    // let merged = { ...formSite.value, file: this.PhotoName };
                    // console.log("merged " + merged);
                    // console.dir(merged);
                    //let merged = { ...foo, ...bar, ...baz };
                    this.pageService.sendPage(formSite.value)
                        .subscribe(function (data) { return data; });
                };
                PageAddAdminComponent.prototype.onChange = function (event) {
                    console.info("event");
                    console.dir(event);
                    this.PhotoName = event.target.files[0].name;
                    //$event.target.files[0]
                };
                PageAddAdminComponent.prototype.ngOnInit = function () {
                    console.info("ngOnInit()");
                };
                return PageAddAdminComponent;
            }());
            PageAddAdminComponent = __decorate([
                core_1.Component({
                    selector: 'page-add-admin',
                    templateUrl: 'src/app/admin/page/page-add.component.html',
                    providers: [page_service_1.PageService]
                }),
                __metadata("design:paramtypes", [page_service_1.PageService])
            ], PageAddAdminComponent);
            exports_1("PageAddAdminComponent", PageAddAdminComponent);
        }
    };
});
