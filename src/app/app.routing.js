System.register(['@angular/router', './home/home.component', './login/login.component', './admin/admin.component', './login/login-register.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, login_component_1, admin_component_1, login_register_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'login-register',
                    component: login_register_component_1.LoginRegisterComponent
                },
                {
                    path: 'admin',
                    component: admin_component_1.AdminComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
