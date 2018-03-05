import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {HelloWorldService} from '../service/helloworld.service';

@Component({
	templateUrl: "app/view/helloworld.html",
	providers: [HelloWorldService]
})

export class HelloWorldComponent implements OnInit{
	public texto: string;

	constructor(
		private _helloWorldService: HelloWorldService
	){}

	ngOnInit(){
		console.log("componente hello world cargado");
		this.getHelloWorld();
	}

	getHelloWorld(){
		this._helloWorldService.getHelloWorld().subscribe(
			response => {
				if(response.result === "success"){
					this.texto = response.data;
				}
			},
			error => {
				alert("Error GET AJAX");
			}
		);
	}

}