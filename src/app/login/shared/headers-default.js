System.register(["@angular/http", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1, HeadersRequestOptions, HeadersRequestOptions_1;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            HeadersRequestOptions = HeadersRequestOptions_1 = (function (_super) {
                __extends(HeadersRequestOptions, _super);
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
                function HeadersRequestOptions() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.headers = new http_1.Headers({ 'x-auth': HeadersRequestOptions_1.auth });
                    _this.body = "Angular";
                    _this.search = new http_1.URLSearchParams("coreTeam=true");
                    return _this;
                }
                // addHeader(headerName: string, headerValue: string ){
                //                 (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
                //             }
                HeadersRequestOptions.prototype.merge = function (options) {
                    options.headers = new http_1.Headers({ 'x-auth': HeadersRequestOptions_1.auth });
                    console.info("wykonałdem merge");
                    return _super.prototype.merge.call(this, options);
                };
                return HeadersRequestOptions;
            }(http_1.BaseRequestOptions));
            HeadersRequestOptions.auth = "asasas";
            HeadersRequestOptions = HeadersRequestOptions_1 = __decorate([
                core_1.Injectable()
            ], HeadersRequestOptions);
            exports_1("HeadersRequestOptions", HeadersRequestOptions);
            //http://restlet.com/blog/2016/04/12/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-2/
            //https://auth0.com/blog/angular-2-series-part-3-using-http/ 
        }
    };
});
