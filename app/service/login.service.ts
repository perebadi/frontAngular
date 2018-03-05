import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/login';
    private headers = new Headers({'Content-Type': 'application/json'});
 
    constructor(private _http: Http) {
    }
 
    login(username: string, password: string): Observable<boolean> {
        return this._http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {

                //Obtenemos el token de la respuesta
                let token = response.json() && response.json().token;

                if (token) {
                    //Guardamos el token en el local storage
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    return true;
                } else {
                    return false;
                }
            });
    }
 
    getToken(): String {
    	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      	var token = currentUser && currentUser.token;
      	return token ? token : "";
    }
 
    logout(): void {
        localStorage.removeItem('currentUser');
    }
}