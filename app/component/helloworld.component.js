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
var helloworld_service_1 = require('../service/helloworld.service');
var HelloWorldComponent = (function () {
    function HelloWorldComponent(_helloWorldService) {
        this._helloWorldService = _helloWorldService;
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
        console.log("componente hello world cargado");
        this.getHelloWorld();
    };
    HelloWorldComponent.prototype.getHelloWorld = function () {
        var _this = this;
        this._helloWorldService.getHelloWorld().subscribe(function (response) {
            if (response.result === "success") {
                _this.texto = response.data;
            }
        }, function (error) {
            alert("Error GET AJAX");
        });
    };
    HelloWorldComponent = __decorate([
        core_1.Component({
            templateUrl: "app/view/helloworld.html",
            providers: [helloworld_service_1.HelloWorldService]
        }), 
        __metadata('design:paramtypes', [helloworld_service_1.HelloWorldService])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map