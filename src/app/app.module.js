System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./app.component", "./home/home.component", "./login/login.component", "./admin/admin.component", "./admin/page/page-add.component", "./admin/page/page-list.component", "./admin/header/header.component", "./login/login-register.component", "./login/shared/headers-default", "./login/shared/can-active.service", "./login/shared/user-token", "./login/shared/login.service", "./admin/shared/log.service", "./admin/page/shared/page.service", "./app.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, app_component_1, home_component_1, login_component_1, admin_component_1, page_add_component_1, page_list_component_1, header_component_1, login_register_component_1, headers_default_1, can_active_service_1, user_token_1, login_service_1, log_service_1, page_service_1, app_routing_1, AppModule;
    return {
        setters: [
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
            function (page_add_component_1_1) {
                page_add_component_1 = page_add_component_1_1;
            },
            function (page_list_component_1_1) {
                page_list_component_1 = page_list_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            },
            function (page_service_1_1) {
                page_service_1 = page_service_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }
        ],
        execute: function () {
            //providers: [ {provide: RequestOptions, useClass: HeadersRequestOptions }  ],
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        admin_component_1.AdminComponent,
                        header_component_1.HeaderAdminComponent,
                        page_add_component_1.PageAddAdminComponent,
                        page_list_component_1.PageListAdminComponent
                    ],
                    providers: [{ provide: http_1.RequestOptions, useClass: headers_default_1.HeadersRequestOptions },
                        user_token_1.UserToken,
                        login_service_1.LoginService,
                        can_active_service_1.CanActivateTeam,
                        log_service_1.LogsService,
                        page_service_1.PageService
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
                //providers: [ {provide: RequestOptions, useClass: HeadersRequestOptions }  ],
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
