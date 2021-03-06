System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/catch", "rxjs/add/operator/toPromise", "./../../shared/log.service"], function (exports_1, context_1) {
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
    var core_1, http_1, log_service_1, PageService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }
        ],
        execute: function () {
            PageService = (function () {
                function PageService(http, logsService) {
                    this.http = http;
                    this.logsService = logsService;
                    this.urlPage = "/admin/page";
                    //super();
                }
                PageService.prototype.getListPages = function () {
                    console.info("wykonałem getAllPages" + this.urlPage);
                    return this.http.get(this.urlPage).map(this.extractData);
                };
                PageService.prototype.sendPage = function (data) {
                    var _this = this;
                    console.info("wykonałem send node ssa" + this.urlPage);
                    console.dir(data);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.urlPage, JSON.stringify(data), { headers: headers }).map(this.extractData).catch(function (err) { return _this.logsService.handleError(err); });
                };
                //.catch(err => this.logsService.logError(err))
                PageService.prototype.extractData = function (res) {
                    console.info("test whether this method is reached");
                    console.dir(res);
                    var body = res.json();
                    console.dir(body);
                    return body || {};
                };
                return PageService;
            }());
            PageService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, log_service_1.LogsService])
            ], PageService);
            exports_1("PageService", PageService);
        }
    };
});
