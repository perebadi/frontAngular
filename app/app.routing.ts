import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HelloWorldComponent} from "./component/helloworld.component";
import {LoginComponent} from './component/login.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "", component: HelloWorldComponent},
	{path: "helloworld", component: HelloWorldComponent},
	{path: "login", component: LoginComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);