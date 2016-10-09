System.register(['@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var http_1;
    var HeadersRequestOptions;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeadersRequestOptions = (function (_super) {
                __extends(HeadersRequestOptions, _super);
                function HeadersRequestOptions(token) {
                    _super.call(this);
                    this.token = token;
                    this.headers = new http_1.Headers({ 'X-Auth': this.token });
                    //this.headers.append('X-Auth', this.token);
                    //this.headers.append('foo', 'bar');
                }
                return HeadersRequestOptions;
            }(http_1.BaseRequestOptions));
            exports_1("HeadersRequestOptions", HeadersRequestOptions);
        }
    }
});
