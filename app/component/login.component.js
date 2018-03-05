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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_service_1 = require('../service/login.service');
var LoginComponent = (function () {
    function LoginComponent(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        this.loginModel = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("logout");
        this._authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        console.log("login");
        this._authenticationService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(function (result) {
            if (result) {
                alert("Login successful");
            }
            else {
                alert("Error login");
            }
        }, function (error) {
            alert("Error login");
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: "app/view/login.html",
            providers: [login_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map