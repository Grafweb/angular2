System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var UserToken, Permissions, CanActivateTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserToken = (function () {
                function UserToken() {
                }
                return UserToken;
            }());
            exports_1("UserToken", UserToken);
            Permissions = (function () {
                function Permissions() {
                }
                Permissions.prototype.canActivate = function (user, id) {
                    return true;
                };
                return Permissions;
            }());
            exports_1("Permissions", Permissions);
            CanActivateTeam = (function () {
                function CanActivateTeam(permissions, currentUser) {
                    this.permissions = permissions;
                    this.currentUser = currentUser;
                }
                CanActivateTeam.prototype.canActivate = function (route, state) {
                    return this.permissions.canActivate(this.currentUser, route.params.id);
                };
                CanActivateTeam = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Permissions, UserToken])
                ], CanActivateTeam);
                return CanActivateTeam;
            }());
            exports_1("CanActivateTeam", CanActivateTeam);
        }
    }
});
