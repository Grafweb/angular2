System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginRegister;
    return {
        setters:[],
        execute: function() {
            LoginRegister = (function () {
                function LoginRegister() {
                    this.name;
                    this.surname;
                    this.email;
                    this.password;
                }
                return LoginRegister;
            }());
            exports_1("LoginRegister", LoginRegister);
        }
    }
});
