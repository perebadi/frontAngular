"use strict";
var router_1 = require('@angular/router');
var helloworld_component_1 = require("./component/helloworld.component");
var login_component_1 = require('./component/login.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: "", component: helloworld_component_1.HelloWorldComponent },
    { path: "helloworld", component: helloworld_component_1.HelloWorldComponent },
    { path: "login", component: login_component_1.LoginComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map