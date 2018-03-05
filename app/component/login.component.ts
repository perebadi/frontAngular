import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticationService} from '../service/login.service';

@Component({
	templateUrl: "app/view/login.html",
	providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
	loginModel: any = {};

	constructor(
		private _router: Router,
		private _authenticationService: AuthenticationService
	){}

	ngOnInit() {
	console.log("logout");
		this._authenticationService.logout();
	}

	login(){
		console.log("login");

		this._authenticationService.login(this.loginModel.username, this.loginModel.password)
				.subscribe(
					result => {
						if(result){
							alert("Login successful");
						}else{
							alert("Error login");
						}
					}, error => {
						alert("Error login");
					}
				);
	}

}