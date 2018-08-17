import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {environment} from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
