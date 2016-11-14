System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './app.component', './home/home.component', './login/login.component', './admin/admin.component', './login/login-register.component', './login/shared/headers-default', './login/shared/can-active.service', './login/shared/user-token', './app.routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, app_component_1, home_component_1, login_component_1, admin_component_1, login_register_component_1, headers_default_1, can_active_service_1, user_token_1, app_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (login_register_component_1_1) {
                login_register_component_1 = login_register_component_1_1;
            },
            function (headers_default_1_1) {
                headers_default_1 = headers_default_1_1;
            },
            function (can_active_service_1_1) {
                can_active_service_1 = can_active_service_1_1;
            },
            function (user_token_1_1) {
                user_token_1 = user_token_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            //http://blog.angular-university.io/angular2-ngmodule/
            //http://stackoverflow.com/questions/34464108/angular2-set-headers-for-every-request
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routing_1.routing],
                        declarations: [app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            login_component_1.LoginComponent,
                            login_register_component_1.LoginRegisterComponent,
                            admin_component_1.AdminComponent
                        ],
                        providers: [{ provide: http_1.RequestOptions, useClass: headers_default_1.HeadersRequestOptions },
                            can_active_service_1.Permissions,
                            can_active_service_1.CanActivateTeam,
                            user_token_1.UserToken],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
