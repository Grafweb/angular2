System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/catch", "rxjs/add/operator/toPromise", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, HeroService;
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.heroesUrl = 'http://localhost:3000/user';
                }
                HeroService.prototype.sendtHeroes = function (data) {
                    var _this = this;
                    console.info("wykonałem send node ssa" + this.heroesUrl);
                    console.dir(data);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(this.heroesUrl, JSON.stringify(data), options).map(this.extractData)
                        .catch(this.handleError).subscribe(function (data) { return _this.saveJwt(data.username); }, function (err) { return _this.logError(err); });
                };
                HeroService.prototype.saveJwt = function (jwt) {
                    if (jwt)
                        localStorage.setItem('id_token', jwt);
                };
                HeroService.prototype.logError = function (err) {
                    console.log(err);
                };
                HeroService.prototype.extractData = function (res) {
                    console.info("test whether this method is reached");
                    var body = res.json();
                    return body.data || {};
                };
                HeroService.prototype.handleError = function (error) {
                    console.info("test whether this method is reached");
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                return HeroService;
            }());
            HeroService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], HeroService);
            exports_1("HeroService", HeroService);
        }
    };
});
