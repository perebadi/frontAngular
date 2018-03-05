import {OnInit} from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";

import {AuthenticationService} from '../service/login.service';

@Injectable()
export class HelloWorldService implements OnInit{

	private headers = new Headers({
     	'Content-Type': 'application/json',
     	'Authorization': 'Bearer ' + this._authenticationService.getToken()
    });

	constructor(
		private _http: Http,
		private _authenticationService: AuthenticationService
	){}

	ngOnInit(){
		console.log("Servicio hello world cargado");
	}

	getHelloWorld(){
		return this._http.get("http://localhost:8080/api/v1/helloworld", {headers: this.headers})
							.map(res => res.json());
	}

}