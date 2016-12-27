System.register(['@angular/core', '@angular/router', './login.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_service_1;
    var CanActivateTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            // export class Permissions {
            //   canActivate(user: UserToken): boolean {
            //     if(user) { 
            //       return true;
            //     } else {
            //       return false;
            //     }
            //   }
            // }
            CanActivateTeam = (function () {
                function CanActivateTeam(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                CanActivateTeam.prototype.canActivate = function (route, state) {
                    if (this.loginService.isLoggedin() && this.loginService.getProfile()) {
                        //console.info("this.loginService.getProfile()" + this.loginService.getProfile().app_metadata.roles[0]);
                        console.info(this.loginService.getProfile().app_metadata.roles.indexOf('admin'));
                        //this.loginService.getProfile().app_metadata.roles[0]
                        return true;
                    }
                    else {
                        return false;
                    }
                    //  let url: string = state.url;
                    //  let headers = new Headers();
                    // console.info("headers.get" + headers.get('x-auth'));
                    //if(this.permissions.canActivate(this.currentUser.token)) {
                    //}
                    //  let url: string = state.url;
                };
                CanActivateTeam = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], CanActivateTeam);
                return CanActivateTeam;
            }());
            exports_1("CanActivateTeam", CanActivateTeam);
        }
    }
});
