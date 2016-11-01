System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/toPromise', 'rxjs/Observable', './headers-default'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, headers_default_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (headers_default_1_1) {
                headers_default_1 = headers_default_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.loginUrl = 'http://localhost:3000/logins';
                    this.getLoginUrl = 'http://localhost:3000/user';
                    //super();
                }
                LoginService.prototype.session = function (data) {
                    var _this = this;
                    console.info("wykonałem send node ssa" + this.loginUrl);
                    console.dir(data);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    //let options = new RequestOptions({ headers: headers });
                    //http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/
                    //http://stackoverflow.com/questions/38043247/angular-2-http-post-request-is-not-being-called-out
                    this.http.post(this.loginUrl, JSON.stringify(data), options).toPromise().then(this.extractData)
                        .catch(this.handleError).then(function (tok) {
                        console.info("data" + tok);
                        console.dir(tok);
                        _this.token = tok;
                        _this.getUser();
                        //this.saveJwt(data.username)
                    }, function (err) { return _this.logError(err); });
                };
                LoginService.prototype.getUser = function () {
                    var _this = this;
                    var optionsm = new headers_default_1.HeadersRequestOptions();
                    optionsm.headers.set('x-auth', this.token);
                    headers_default_1.HeadersRequestOptions.auth = this.token;
                    // let request = new Request(options);
                    //var req = new Request(optionsm);
                    //let hea = optionsm.headers.get('x-auth');
                    //optionsm.merge({headers: new Headers({ 'x-auth': this.token })});
                    //var req = new Request();
                    // optionsm.merge({
                    // headers: new Headers({ 'x-auth': this.token })
                    // });
                    //optionsm
                    //let headers = new Headers({ 'X-Auth': this.token });
                    //     let options = new RequestOptions({ headers: headers });
                    // var options = new BaseRequestOptions();
                    // var req = new Request(options.merge({
                    // method: RequestMethod.Get,
                    // headers: headers
                    // }));
                    // console.log('req.method:', req.headers);
                    console.info("token" + this.token + "-- optionsm ---" + optionsm.headers.get('x-auth')
                        + "-------");
                    //let optionsdf = new RequestOptions({ headers: headers });
                    //this.http.get(this.getLoginUrl).subscribe()
                    return this.http.get(this.getLoginUrl).map(this.extractData)
                        .subscribe(function (tok) {
                        console.info("data2" + tok);
                        // var options = new BaseRequestOptions();
                        // var req = new Request(options.merge({
                        // headers: new Headers({ 'X-My-Custom-Header': 'Angular' })
                        // }));
                        // console.log('req.method:', req.headers);
                        // this.baseRequestOptions.headers = headers;
                        //this.saveJwt(data.username)
                        //https://books.google.pl/books?id=9LbjCwAAQBAJ&pg=PA203&lpg=PA203&dq=HttpModule+add+default+angular+2&source=bl&ots=WYebX7w5PM&sig=oPJ4enIkDQhMJqdGdA7pCUatWnU&hl=pl&sa=X&ved=0ahUKEwiIptzBjeDPAhXICCwKHbgqCBk4ChDoAQgjMAE#v=onepage&q=HttpModule%20add%20default%20angular%202&f=false
                    }, function (err) { return _this.logError(err); });
                };
                LoginService.prototype.saveJwt = function (jwt) {
                    if (jwt)
                        localStorage.setItem('id_token', jwt);
                };
                LoginService.prototype.logError = function (err) {
                    console.log("To jest dział err" + err);
                };
                LoginService.prototype.extractData = function (res) {
                    console.info("test whether this method is reached");
                    console.dir(res);
                    var body = res.json();
                    console.dir(body);
                    return body || {};
                };
                LoginService.prototype.handleError = function (error) {
                    console.info("test whether this method is reached");
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
