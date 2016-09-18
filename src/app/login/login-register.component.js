System.register(['@angular/core', './shared/login-register.service', './login-register'], function(exports_1, context_1) {
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
    var core_1, login_register_service_1, login_register_1;
    var LoginRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_register_service_1_1) {
                login_register_service_1 = login_register_service_1_1;
            },
            function (login_register_1_1) {
                login_register_1 = login_register_1_1;
            }],
        execute: function() {
            LoginRegisterComponent = (function () {
                function LoginRegisterComponent(heroService) {
                    this.heroService = heroService;
                    this.login = new login_register_1.LoginRegister();
                    // this.name = "";
                    // this.surname = "";
                }
                LoginRegisterComponent.prototype.onSubmit = function () {
                    //Http.post();   
                    console.info("wykonałem" + this.login.username);
                    this.heroService.sendtHeroes(this.login);
                };
                LoginRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'login-register',
                        // template: "register"
                        templateUrl: 'src/app/login/login-register.component.html',
                        providers: [login_register_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [login_register_service_1.HeroService])
                ], LoginRegisterComponent);
                return LoginRegisterComponent;
            }());
            exports_1("LoginRegisterComponent", LoginRegisterComponent);
        }
    }
});
