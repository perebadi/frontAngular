import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component'; 
import {HelloWorldComponent} from './component/helloworld.component';
import {LoginComponent} from './component/login.component';

import {AuthenticationService} from './service/login.service';
import {HelloWorldService} from './service/helloworld.service';

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					routing,
  					HttpModule,
            FormsModule 
  				],
  declarations: [ 
  					AppComponent,
  					HelloWorldComponent,
            LoginComponent 
  				],
  providers:    [ 
            appRoutingProviders,
            AuthenticationService,
            HelloWorldService
          ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
