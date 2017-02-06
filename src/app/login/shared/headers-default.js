System.register(['@angular/http', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var HeadersRequestOptions;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // export class HeadersRequestOptions extends BaseRequestOptions {
            //   //Headers.append("name: string", "value: string")
            //     //headers:Headers = new Headers({"X-Auth": 'darek.darek.darek'});
            //     constructor() {
            //         super();
            //         //this.headers.append('X-Auth', "darek.darek.darek");
            //         this.headers.append('Authorization', 'my-token');
            //         this.headers.append('foo', 'bar');
            //         //this.token = token;
            //         //this.headers = new Headers({'X-Auth': "darek.darek.darek"})
            //         //this.headers.append('X-Auth', "darek.darek.darek");
            //         //this.headers.append('foo', 'bar');
            //     }
            // }
            HeadersRequestOptions = (function (_super) {
                __extends(HeadersRequestOptions, _super);
                function HeadersRequestOptions() {
                    _super.apply(this, arguments);
                    this.headers = new http_1.Headers({ 'x-auth': HeadersRequestOptions.auth });
                    this.body = "Angular";
                    this.search = new http_1.URLSearchParams("coreTeam=true");
                }
                // addHeader(headerName: string, headerValue: string ){
                //                 (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
                //             }
                HeadersRequestOptions.prototype.merge = function (options) {
                    options.headers = new http_1.Headers({ 'x-auth': HeadersRequestOptions.auth });
                    console.info("wykonałdem merge");
                    return _super.prototype.merge.call(this, options);
                };
                HeadersRequestOptions.auth = "asasas";
                HeadersRequestOptions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeadersRequestOptions);
                return HeadersRequestOptions;
            }(http_1.BaseRequestOptions));
            exports_1("HeadersRequestOptions", HeadersRequestOptions);
        }
    }
});
//http://restlet.com/blog/2016/04/12/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-2/
//https://auth0.com/blog/angular-2-series-part-3-using-http/ 
