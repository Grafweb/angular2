System.register(['@angular/core', './shared/login.service', './login', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, login_service_1, login_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(LoginService) {
                    this.LoginService = LoginService;
                    this.login = new login_1.Login();
                }
                LoginComponent.prototype.submit = function (data) {
                    var _this = this;
                    console.dir(this.login);
                    this.LoginService.session(this.login).then(function (data) {
                        _this.LoginService.getUser().then(function (user) {
                            console.info("data check end" + user);
                            console.dir(user);
                        });
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'toh-login',
                        // template: "ds"
                        templateUrl: 'src/app/login/login.component.html',
                        providers: [login_service_1.LoginService]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
